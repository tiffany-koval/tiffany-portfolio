require('dotenv').config();
const express = require('express');
const path = require('path');
const axios = require('axios');
const querystring = require('querystring');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Ensure JSON parsing

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Spotify credentials
const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const redirect_uri =
    process.env.NODE_ENV === 'production'
        ? 'https://node-practice-chi.vercel.app/callback'
        : 'http://localhost:3001/callback';

// Spotify login route
app.get('/login', (req, res) => {
    const scope = 'user-read-recently-played';
    const state = generateRandomString(16);

    const authURL = `https://accounts.spotify.com/authorize?${querystring.stringify({
        response_type: 'code',
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state,
    })}`;

    res.redirect(authURL);
});

// Spotify callback route
app.get('/callback', async (req, res) => {
    const code = req.query.code || null;
    const state = req.query.state || null;

    if (!state) {
        return res.status(400).json({ error: 'State mismatch or missing state' });
    }

    try {
        const tokenResponse = await axios.post('https://accounts.spotify.com/api/token', null, {
            headers: {
                Authorization: `Basic ${Buffer.from(client_id + ':' + client_secret).toString('base64')}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            params: {
                code: code,
                redirect_uri: redirect_uri,
                grant_type: 'authorization_code',
            },
        });

        const { access_token, refresh_token } = tokenResponse.data;

        const recentlyPlayedResponse = await axios.get('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
            headers: { Authorization: `Bearer ${access_token}` },
        });

        const track = recentlyPlayedResponse.data.items[0]?.track;
        const played_at = recentlyPlayedResponse.data.items[0]?.played_at;

        if (!track) {
            return res.status(404).json({ error: 'No recent tracks found' });
        }

        const lastPlayedSong = {
            song: track.name,
            artist: track.artists.map((a) => a.name).join(', '),
            coverArt: track.album.images[0]?.url,
            playedAt: new Date(played_at).toLocaleString('en-US', {
                timeZone: 'PST',
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                timeZoneName: 'short',
            }),
        };

        res.json({ lastPlayedSong, access_token, refresh_token });
    } catch (error) {
        console.error('Error fetching data from Spotify:', error.response?.data || error.message);
        res.status(500).json({ error: 'Failed to fetch data from Spotify' });
    }
});

// Endpoint to get the last played song
app.get('/last-song', (req, res) => {
    if (!lastPlayedSong) {
        return res.status(404).json({ error: 'No song data available. Fetch the song first.' });
    }

    res.json(lastPlayedSong);
});

// Helper function to generate random strings (for state)
function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

// Only start the server if running locally
if (process.env.NODE_ENV !== 'production') {
    const PORT = 3001;
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

// Export for Vercel serverless functions
module.exports = app;


