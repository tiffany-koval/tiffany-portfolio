const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleWare = require('webpack-dev-middleware');
const webpackHotMiddleWare = require('webpack-hot-middleware');
const axios = require('axios');
const querystring = require('querystring');
const cors = require('cors');

env.config();

const webpackConfig = require('./webpack.config.js');
const compiler = webpack(webpackConfig);
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for webpack hot reloading (development only)
if (process.env.NODE_ENV === 'development') {
    app.use(
        webpackDevMiddleWare(compiler, {
            publicPath: webpackConfig.output.publicPath,
        })
    );
    app.use(webpackHotMiddleWare(compiler));
}

// Serve static files from "dist" for production
app.use(express.static(path.join(__dirname, 'dist')));

// Serve index.html on the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Spotify credentials (Use environment variables for security)
const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const redirect_uri = process.env.SPOTIFY_REDIRECT_URI;

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

        res.json(tokenResponse.data);
    } catch (error) {
        console.error('Error fetching data from Spotify:', error);
        res.status(500).send('Failed to fetch data from Spotify');
    }
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
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

