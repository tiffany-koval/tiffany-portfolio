const axios = require('axios');
const { get, set } = require('@vercel/edge-config'); // Vercel Edge Config for storage

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN; // Store refresh token in env variables

module.exports = async (req, res) => {
    if (req.query.action === 'login') {
        return handleLogin(res);
    }

    if (req.url.startsWith('/api/callback')) {
        return handleCallback(req, res);
    }

    if (req.url.startsWith('/api/update-song')) {
        return updateLastPlayedSong(req, res);
    }

    return getLastPlayedSong(req, res);
};

// **1. Handle Spotify Login Flow**
function handleLogin(res) {
    const scope = 'user-read-recently-played';
    const authURL = `https://accounts.spotify.com/authorize?${new URLSearchParams({
        response_type: 'code',
        client_id,
        scope,
        redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
        state: generateRandomString(16),
    }).toString()}`;
    
    return res.redirect(authURL);
}

// **2. Callback after Spotify Login**
async function handleCallback(req, res) {
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
                redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
                grant_type: 'authorization_code',
            },
        });

        return res.status(200).json({
            access_token: tokenResponse.data.access_token,
            refresh_token: tokenResponse.data.refresh_token,
        });
    } catch (error) {
        console.error('Error fetching token:', error.response?.data || error.message);
        return res.status(500).json({ error: 'Failed to fetch token from Spotify' });
    }
}

// **3. Fetch Last Played Song from Vercel Edge Config**
async function getLastPlayedSong(req, res) {
    try {
        const lastPlayedSong = await get('last_played_song');
        if (!lastPlayedSong) {
            return res.status(404).json({ error: 'No song data available' });
        }
        return res.json(lastPlayedSong);
    } catch (error) {
        console.error('Error retrieving last played song:', error.message);
        return res.status(500).json({ error: 'Failed to retrieve song data' });
    }
}

// **4. Cron Job: Fetch & Store Last Played Song**
async function updateLastPlayedSong(req, res) {
    const token = await refreshAccessToken();
    if (!token) {
        return res.status(500).json({ error: 'Failed to get access token' });
    }

    try {
        const response = await axios.get('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
            headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.data.items || response.data.items.length === 0) {
            return res.status(404).json({ error: 'No recently played songs found' });
        }

        const track = response.data.items[0].track;
        const played_at = response.data.items[0].played_at;

        const lastPlayedSong = {
            song: track.name,
            artist: track.artists.map(a => a.name).join(', '),
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

        // Store in Vercel Edge Config
        await set('last_played_song', lastPlayedSong);
        return res.status(200).json({ success: true, lastPlayedSong });
    } catch (error) {
        console.error('Error fetching last played song:', error.response?.data || error.message);
        return res.status(500).json({ error: 'Failed to fetch song' });
    }
}

// **5. Refresh Spotify Access Token**
async function refreshAccessToken() {
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

        return tokenResponse.data.access_token;
    } catch (error) {
        console.error('Error refreshing token:', error.response?.data || error.message);
        return null;
    }
}

// **Helper: Generate Random String for State**
function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}




