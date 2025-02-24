const axios = require('axios');
const querystring = require('querystring');
const Cookies = require('cookies'); // For storing cookies on Vercel

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const redirect_uri = process.env.SPOTIFY_REDIRECT_URI;

module.exports = async (req, res) => {
    const cookies = new Cookies(req, res);
    let access_token = cookies.get('access_token'); // Fetch from cookies
    let refresh_token = cookies.get('refresh_token'); // Fetch refresh token
    console.log('Access token from cookies:', access_token); // Debugging token

    // If access token exists, fetch the last played song directly
    if (access_token) {
        return fetchLastPlayedSong(req, res, access_token);
    }

    // If no access token, handle the login flow
    if (req.query.action === 'login') {
        const scope = 'user-read-recently-played';
        const authURL = `https://accounts.spotify.com/authorize?${querystring.stringify({
            response_type: 'code',
            client_id,
            scope,
            redirect_uri,
            state: generateRandomString(16),
        })}`;
        return res.redirect(authURL);
    }

    // Callback from Spotify after login
    if (req.url.startsWith('/api/callback')) {
        const { code, state } = req.query;
        if (!code || !state) {
            return res.status(400).json({ error: 'State mismatch or missing parameters' });
        }

        try {
            const tokenResponse = await axios.post('https://accounts.spotify.com/api/token', null, {
                headers: {
                    Authorization: `Basic ${Buffer.from(client_id + ':' + client_secret).toString('base64')}`,
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                params: {
                    code,
                    redirect_uri,
                    grant_type: 'authorization_code',
                },
            });

            const { access_token: newAccessToken, refresh_token: newRefreshToken } = tokenResponse.data;

            // Save tokens to cookies (set expiration times as needed)
            cookies.set('access_token', newAccessToken, { httpOnly: true, secure: true, maxAge: 3600 * 1000 }); // 1 hour
            cookies.set('refresh_token', newRefreshToken, { httpOnly: true, secure: true, maxAge: 7 * 24 * 3600 * 1000 }); // 7 days

            return fetchLastPlayedSong(req, res, newAccessToken);
        } catch (error) {
            console.error('Error fetching token from Spotify:', error.response ? error.response.data : error.message);
            return res.status(500).json({ error: 'Failed to fetch data from Spotify', details: error.response ? error.response.data : error.message });
        }
    }

    return res.status(400).json({ error: 'Invalid request' });
};

// Fetch the last played song
async function fetchLastPlayedSong(req, res, token) {
    try {
        const recentlyPlayedResponse = await axios.get('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
            headers: { Authorization: `Bearer ${token}` },
        });

        const track = recentlyPlayedResponse.data.items[0].track;
        const played_at = recentlyPlayedResponse.data.items[0].played_at;

        const lastPlayedSong = {
            song: track.name,
            artist: track.artists.map((a) => a.name).join(', '),
            coverArt: track.album.images[0].url,
            playedAt: new Date(played_at).toLocaleString('en-US', {
                timeZone: 'PST',
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                timeZoneName: 'short',
            }),
        };

        return res.json(lastPlayedSong);
    } catch (error) {
        console.error('Error fetching last played song:', error.response ? error.response.data : error.message);

        // If the access token has expired, refresh it using the refresh token
        if (error.response && error.response.status === 401) {
            const newAccessToken = await refreshAccessToken(refresh_token);
            if (!newAccessToken) {
                return res.status(401).json({ error: 'Unable to refresh access token' });
            }
            // After refreshing the token, fetch the last played song again
            return fetchLastPlayedSong(req, res, newAccessToken);
        }

        return res.status(500).json({ error: 'Failed to fetch data from Spotify', details: error.response ? error.response.data : error.message });
    }
}

// Refresh the access token using the refresh token
async function refreshAccessToken(refresh_token) {
    if (!refresh_token) {
        console.error('No refresh token available');
        return null;
    }

    try {
        const tokenResponse = await axios.post('https://accounts.spotify.com/api/token', null, {
            headers: {
                Authorization: `Basic ${Buffer.from(client_id + ':' + client_secret).toString('base64')}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            params: {
                grant_type: 'refresh_token',
                refresh_token,
            },
        });

        const newAccessToken = tokenResponse.data.access_token;
        return newAccessToken;
    } catch (error) {
        console.error('Error refreshing token:', error.response ? error.response.data : error.message);
        return null;
    }
}

// Helper function to generate random strings for state
function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}



