const axios = require('axios');
const querystring = require('querystring');
const Redis = require('ioredis');

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const redirect_uri = process.env.SPOTIFY_REDIRECT_URI;

// Set up Redis connection with timeout and retry logic
const redis = new Redis(process.env.REDIS_URL, {
    connectTimeout: 5000, // 5 seconds timeout for Redis connection
    maxRetriesPerRequest: 3, // Retry up to 3 times
    retryStrategy: (times) => Math.min(times * 1000, 3000), // Retry strategy: exponential backoff
});

module.exports = async (req, res) => {
    // Check Redis for stored access_token and refresh_token
    let access_token, refresh_token;
    try {
        access_token = await redis.get('access_token');
        refresh_token = await redis.get('refresh_token');
    } catch (error) {
        console.error('Error accessing Redis:', error.message);
        return res.status(500).json({ error: 'Redis connection error' });
    }
    console.log('Access token from Redis:', access_token); // Debugging token
    console.log('Refresh token from Redis:', refresh_token); // Debugging refresh token

    // If access token exists, fetch the last played song directly
    if (access_token) {
        console.log('Access token found, fetching last played song...');
        return fetchLastPlayedSong(req, res, access_token);
    }

    // If no access token, handle the login flow
    if (req.query.action === 'login') {
        console.log('No access token found, redirecting to Spotify login...');
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
            console.log('Exchanging code for token...');
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
                timeout: 5000, // 5 seconds timeout for token exchange
            });

            const { access_token: newAccessToken, refresh_token: newRefreshToken } = tokenResponse.data;

            // Store tokens in Redis with expiration time
            console.log('Storing tokens in Redis...');
            await redis.set('access_token', newAccessToken, 'EX', 3600); // Expires in 1 hour
            await redis.set('refresh_token', newRefreshToken, 'EX', 7 * 24 * 3600); // Expires in 7 days

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
        console.log('Fetching last played song...');
        const recentlyPlayedResponse = await axios.get('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
            headers: { Authorization: `Bearer ${token}` },
            timeout: 5000, // 5 seconds timeout for API request
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
            console.log('Access token expired, refreshing...');
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
        console.log('Refreshing access token...');
        const tokenResponse = await axios.post('https://accounts.spotify.com/api/token', null, {
            headers: {
                Authorization: `Basic ${Buffer.from(client_id + ':' + client_secret).toString('base64')}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            params: {
                grant_type: 'refresh_token',
                refresh_token,
            },
            timeout: 5000, // 5 seconds timeout for token refresh
        });

        const newAccessToken = tokenResponse.data.access_token;

        // Store the new access token in Redis and reset its expiration
        console.log('Storing refreshed token in Redis...');
        await redis.set('access_token', newAccessToken, 'EX', 3600); // Expires in 1 hour

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






