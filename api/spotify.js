import { createClient } from 'redis';
const axios = require('axios');
const querystring = require('querystring');
const Cookies = require('cookies'); // For storing cookies on Vercel

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const redirect_uri = process.env.SPOTIFY_REDIRECT_URI;

// Set up Redis client
const redisClient = createClient({
  url: process.env.REDIS_URL,  // Your Redis connection string (e.g., from Upstash)
  socket: {
    tls: true,
    rejectUnauthorized: false,  // For self-signed certs or providers like Upstash
  },
});

redisClient.connect().catch(console.error);  // Connect to Redis

export default async function handler(req, res) {
    const cookies = new Cookies(req, res);
    let access_token = cookies.get('access_token');
    let refresh_token = cookies.get('refresh_token');
  
    if (access_token) {
      return fetchLastPlayedSong(req, res, access_token, refresh_token);
    }
  
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
  
        const cookieOptions = {
          httpOnly: true,
          maxAge: 3600 * 1000, // 1 hour for access_token
        };
  
        if (req.headers['x-forwarded-proto'] === 'https') {
          cookieOptions.secure = true;
        }
  
        cookies.set('access_token', newAccessToken, cookieOptions);
        cookies.set('refresh_token', newRefreshToken, { ...cookieOptions, maxAge: 7 * 24 * 3600 * 1000 });
  
        return fetchLastPlayedSong(req, res, newAccessToken, newRefreshToken);
      } catch (error) {
        console.error('Error fetching token from Spotify:', error.message);
        return res.status(500).json({ error: 'Failed to fetch data from Spotify', details: error.message });
      }
    }
  
    return res.status(400).json({ error: 'Invalid request' });
  }
  

// Fetch the last played song with Redis caching
async function fetchLastPlayedSong(req, res, token, refresh_token) {
  try {
    // Check if last played song is in cache
    const cachedSong = await redisClient.get('lastPlayedSong');
    
    if (cachedSong) {
      console.log('Cache hit');
      return res.json(JSON.parse(cachedSong));  // Return cached data
    }

    // Cache miss, make a request to Spotify API
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

    // Cache the result in Redis for future requests (set an expiration time of 5 minutes)
    await redisClient.set('lastPlayedSong', JSON.stringify(lastPlayedSong), { EX: 300 });

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



