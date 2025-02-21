const express = require('express');
const path = require('path');
const axios = require('axios');
const querystring = require('querystring');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.static(path.join(__dirname, 'src')));

// Serve index.html on root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

// Spotify credentials
const client_id = process.env.SPOTIFY_CLIENT_ID; 
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const redirect_uri = 'node-practice-chi.vercel.app/callback';

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
        return res.status(400).send('State mismatch or missing state');
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

        const { access_token } = tokenResponse.data;
        res.json({ access_token });
    } catch (error) {
        console.error('Error fetching Spotify token:', error);
        res.status(500).send('Failed to fetch Spotify token');
    }
});

// Helper function to generate random strings
function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

// Export the app for Vercel
module.exports = app;


