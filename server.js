const express = require('express');
const path = require('path');
const browserSync = require('browser-sync');
const webpack = require('webpack');
const webpackDevMiddleWare = require('webpack-dev-middleware');
const webpackHotMiddleWare = require('webpack-hot-middleware');

const axios = require('axios');
const querystring = require('querystring');
const cors = require('cors');

// const app = express();
const webpackConfig = require('./webpack.config.js');
const compiler = webpack(webpackConfig);

const app = express();

// Tell express to use the webpack-dev-middleware and use the webpack.config.js config as a base
// Use webpack-dev-middleware with hot reloading 
app.use(
    webpackDevMiddleWare(compiler, {
      publicPath: webpackConfig.output.publicPath,
    })
  );
app.use(webpackHotMiddleWare(compiler));

//Serve static files from the "src" directory 
app.use(express.static(path.join(__dirname, 'src')));

//Serve index.html on the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
})

//Additional routes
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'about.html'));
})

app.get('/casper-mattress-quiz', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'casper-mattress-quiz.html'));
})

// //Start the Express server
// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);

//     //Initialize BrowserSync to proxy the Express server
// browserSync.init({
//     proxy: `http://localhost:${PORT}`, //Proxy the server
//     filex: ['src/**/*.*'], //Watch for changes in the "src" directory
//     port: 3001, //Set Browsersync to run on a different port
//     open:false, //Prevents the BrowserSync from automatically opening a new browser tab
// })
// })

// const express = require('express');
// const path = require('path');
// const browserSync = require('browser-sync');
// const axios = require('axios');
// const querystring = require('querystring');
// const cors = require('cors');

// Set up express app
// const app = express();

// Spotify credentials
const client_id = 'c5c925f6e0f548ec8179875d65d464c3'; // Replace with your actual Client ID
const client_secret = '44503946562147229b23216f8f945e09'; // Replace with your actual Client Secret
const redirect_uri = 'http://localhost:3001/callback'; // Ensure this matches your Spotify app redirect URI

// In-memory storage for the last played song and tokens (you can replace this with a database in production)
let storedTokens = {};
let lastPlayedSong = {};

// Middleware
app.use(cors());

// Serve static files (like index.html) from "src"
app.use(express.static(path.join(__dirname, 'src')));

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

  // Save state to session or cookies (for comparison on callback)
  // For now, we skip this part but it’s important to secure state matching in production.
  res.redirect(authURL);
});

// Spotify callback route
app.get('/callback', (req, res) => {
  const code = req.query.code || null;
  const state = req.query.state || null;

  if (state === null) {
    return res.status(400).send('State mismatch or missing state');
  }

  if (code) {
    axios
      .post('https://accounts.spotify.com/api/token', null, {
        headers: {
          Authorization: `Basic ${Buffer.from(client_id + ':' + client_secret).toString('base64')}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        params: {
          code: code,
          redirect_uri: redirect_uri,
          grant_type: 'authorization_code',
        },
      })
      .then((response) => {
        const access_token = response.data.access_token;
        const refresh_token = response.data.refresh_token; // Save the refresh token

        // Store the tokens in memory (you should use persistent storage in production)
        storedTokens = { access_token, refresh_token };

        // Fetch the recently played song
        return axios.get('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
          headers: { Authorization: `Bearer ${access_token}` },
        });
      })
      .then((response) => {
        const track = response.data.items[0].track;
        const played_at = response.data.items[0].played_at;

        // Save the last played song in memory
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
            timeZone: 'America/Los_Angeles',
            timeZoneName: 'short'
          }),
          
        };

        res.send('Last played song fetched and saved successfully!');
      })
      .catch((error) => {
        console.error('Error fetching data from Spotify:', error);
        res.status(500).send('Failed to fetch data from Spotify');
      });
  } else {
    res.status(400).send('No authorization code provided');
  }
});

// Endpoint to get the last played song
app.get('/last-song', (req, res) => {
  if (Object.keys(lastPlayedSong).length === 0) {
    return res.status(404).send('No song data available. Fetch the song first.');
  }

  // Ensure the access token is valid
  if (isTokenExpired(storedTokens.access_token)) {
    refreshAccessToken(); // Refresh token if expired
  }

  res.json(lastPlayedSong); // Send the last played song data to the frontend
});

// Helper function to check if the token is expired
function isTokenExpired(token) {
  // Add logic to check token expiration (e.g., compare the token's expiration time)
  return false; // Placeholder: assume token is valid
}

// Helper function to refresh the access token using the refresh token
function refreshAccessToken() {
  axios
    .post('https://accounts.spotify.com/api/token', null, {
      headers: {
        Authorization: `Basic ${Buffer.from(client_id + ':' + client_secret).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      params: {
        refresh_token: storedTokens.refresh_token,
        grant_type: 'refresh_token',
      },
    })
    .then((response) => {
      storedTokens.access_token = response.data.access_token; // Update the stored access token
    })
    .catch((error) => {
      console.error('Error refreshing access token:', error);
    });
}

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
  // Initialize BrowserSync to proxy the Express server
  browserSync.init({
    proxy: `http://localhost:${PORT}`,
    files: ['src/**/*.*'],
    port: 3001,
    open: false,
  });
});
