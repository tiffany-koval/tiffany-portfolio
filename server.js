const sqlite3 = require('sqlite3').verbose();
const express = require('express');
const path = require('path');
const browserSync = require('browser-sync');
const webpack = require('webpack');
const webpackDevMiddleWare = require('webpack-dev-middleware');
const webpackHotMiddleWare = require('webpack-hot-middleware');
const axios = require('axios');
const querystring = require('querystring');
const cors = require('cors');

const schedule = require('node-schedule');

const webpackConfig = require('./webpack.config.js');
const compiler = webpack(webpackConfig);
const app = express();

// Middleware for webpack hot reloading
app.use(
    webpackDevMiddleWare(compiler, {
        publicPath: webpackConfig.output.publicPath,
    })
);
app.use(webpackHotMiddleWare(compiler));

// Serve static files from the "src" directory
app.use(express.static(path.join(__dirname, 'src')));

// Serve index.html on the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

// Additional routes
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'about.html'));
});

app.get('/casper-mattress-quiz', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'casper-mattress-quiz.html'));
});

// Spotify credentials
const client_id = 'c5c925f6e0f548ec8179875d65d464c3'; // Replace with your actual Client ID
const client_secret = '44503946562147229b23216f8f945e09'; // Replace with your actual Client Secret
const redirect_uri = 'http://localhost:3002/callback'; // Ensure this matches your Spotify app redirect URI

// Middleware
app.use(cors());

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

    if (state === null) {
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

        const { access_token, refresh_token } = tokenResponse.data;
        storedTokens = { access_token, refresh_token };

        const recentlyPlayedResponse = await axios.get('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
            headers: { Authorization: `Bearer ${access_token}` },
        });

        const track = recentlyPlayedResponse.data.items[0].track;
        const played_at = recentlyPlayedResponse.data.items[0].played_at;

        lastPlayedSong = {
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

        res.send('Last played song fetched and saved successfully!');
    } catch (error) {
        console.error('Error fetching data from Spotify:', error);
        res.status(500).send('Failed to fetch data from Spotify');
    }
});

// Endpoint to get the last played song
app.get('/last-song', (req, res) => {
    if (!lastPlayedSong) {
        return res.status(404).send('No song data available. Fetch the song first.');
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

// Start the Express server
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    browserSync.init({
        proxy: `http://localhost:${PORT}`,
        files: ['src/**/*.*'],
        port: 3001,
        open: false,
    });
});

