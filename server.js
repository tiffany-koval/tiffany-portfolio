require('dotenv').config(); // Load environment variables from .env

const express = require('express');
const path = require('path');
const cors = require('cors');
const webpack = require('webpack');
const webpackDevMiddleWare = require('webpack-dev-middleware');
const webpackHotMiddleWare = require('webpack-hot-middleware');
const browserSync = require('browser-sync');
const webpackConfig = require('./webpack.config.js');

const app = express();
const isDevelopment = process.env.NODE_ENV !== 'production';

// Middleware for webpack hot reloading
app.use(
    webpackDevMiddleWare(compiler, {
        publicPath: webpackConfig.output.publicPath,
    })
);
app.use(webpackHotMiddleWare(compiler));


// Serve static files
app.use(express.static(path.join(__dirname, 'dist')));

// Only use Webpack dev middleware in development mode
if (isDevelopment) {
    const compiler = webpack(webpackConfig);
    app.use(
        webpackDevMiddleWare(compiler, {
            publicPath: webpackConfig.output.publicPath,
        })
    );
    app.use(webpackHotMiddleWare(compiler));
}

// Serve index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Serve index.html on the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});


const isProduction = process.env.NODE_ENV === 'production';

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const redirect_uri = isProduction
    ? 'https://node-practice-chi.vercel.app/callback'  // Production
    : 'http://localhost:3002/callback';  

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

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    if (isDevelopment) {
        browserSync.init({
            proxy: `http://localhost:${PORT}`,
            files: ['src/**/*.*'],
            port: 3002,
            open: false,
        });
    }
});

