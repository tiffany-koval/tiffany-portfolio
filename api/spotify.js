const axios = require('axios');
const querystring = require('querystring');
const Redis = require('ioredis');

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const redirect_uri = process.env.SPOTIFY_REDIRECT_URI;
const redis_url = process.env.REDIS_URL;
const redis_password = process.env.REDIS_PASSWORD; // In case authentication is needed

// Enhanced Redis Connection with Debugging
const redis = new Redis(redis_url, {
    password: redis_password || undefined,
    connectTimeout: 10000, // 10 seconds timeout for Redis connection
    maxRetriesPerRequest: 5, // Retry up to 5 times before failing
    retryStrategy: (times) => Math.min(times * 1000, 5000), // Exponential backoff up to 5 seconds
});

// Debug Redis Connection
redis.on('connect', () => console.log('✅ Redis connected successfully'));
redis.on('error', (err) => console.error('❌ Redis connection error:', err.message));

module.exports = async (req, res) => {
    console.log('🔹 Incoming request:', req.method, req.url);
    
    let access_token, refresh_token;
    try {
        console.log('🟡 Checking Redis for tokens...');
        access_token = await redis.get('access_token');
        refresh_token = await redis.get('refresh_token');
        console.log('🔹 Access Token:', access_token ? 'Exists ✅' : 'Not Found ❌');
        console.log('🔹 Refresh Token:', refresh_token ? 'Exists ✅' : 'Not Found ❌');
    } catch (error) {
        console.error('❌ Redis Fetch Error:', error.message);
        return res.status(500).json({ error: 'Redis connection error' });
    }

    if (access_token) {
        return fetchLastPlayedSong(req, res, access_token);
    }

    if (req.query.action === 'login') {
        console.log('🔹 Redirecting to Spotify login...');
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

    if (req.url.startsWith('/api/callback')) {
        const { code, state } = req.query;
        if (!code || !state) {
            return res.status(400).json({ error: 'State mismatch or missing parameters' });
        }

        try {
            console.log('🔹 Exchanging code for token...');
            const tokenResponse = await axios.post('https://accounts.spotify.com/api/token', null, {
                headers: {
                    Authorization: `Basic ${Buffer.from(client_id + ':' + client_secret).toString('base64')}`,
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                params: { code, redirect_uri, grant_type: 'authorization_code' },
                timeout: 10000, // 10 seconds timeout for token exchange
            });

            const { access_token: newAccessToken, refresh_token: newRefreshToken } = tokenResponse.data;

            console.log('✅ Storing tokens in Redis...');
            await redis.set('access_token', newAccessToken, 'EX', 3600); // Expires in 1 hour
            await redis.set('refresh_token', newRefreshToken, 'EX', 7 * 24 * 3600); // Expires in 7 days

            return fetchLastPlayedSong(req, res, newAccessToken);
        } catch (error) {
            console.error('❌ Spotify Token Fetch Error:', error.response ? error.response.data : error.message);
            return res.status(500).json({ error: 'Failed to fetch data from Spotify' });
        }
    }

    return res.status(400).json({ error: 'Invalid request' });
};

async function fetchLastPlayedSong(req, res, token) {
    try {
        console.log('🔹 Fetching last played song...');
        const response = await axios.get('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
            headers: { Authorization: `Bearer ${token}` },
            timeout: 10000, // 10 seconds timeout for API request
        });

        if (!response.data.items.length) {
            return res.status(404).json({ error: 'No recently played tracks found' });
        }

        const track = response.data.items[0].track;
        const played_at = response.data.items[0].played_at;

        return res.json({
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
        });
    } catch (error) {
        console.error('❌ Error fetching last played song:', error.response ? error.response.data : error.message);

        if (error.response && error.response.status === 401) {
            console.log('🔄 Access token expired, attempting refresh...');
            const newAccessToken = await refreshAccessToken();
            return newAccessToken ? fetchLastPlayedSong(req, res, newAccessToken) : res.status(401).json({ error: 'Unable to refresh access token' });
        }

        return res.status(500).json({ error: 'Failed to fetch data from Spotify' });
    }
}

async function refreshAccessToken() {
    try {
        console.log('🔄 Refreshing access token...');
        const refresh_token = await redis.get('refresh_token');
        if (!refresh_token) {
            console.error('❌ No refresh token available');
            return null;
        }

        const response = await axios.post('https://accounts.spotify.com/api/token', null, {
            headers: {
                Authorization: `Basic ${Buffer.from(client_id + ':' + client_secret).toString('base64')}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            params: { grant_type: 'refresh_token', refresh_token },
            timeout: 10000,
        });

        const newAccessToken = response.data.access_token;
        console.log('✅ Storing new access token in Redis...');
        await redis.set('access_token', newAccessToken, 'EX', 3600);

        return newAccessToken;
    } catch (error) {
        console.error('❌ Token Refresh Error:', error.response ? error.response.data : error.message);
        return null;
    }
}

function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return Array.from({ length }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
}








