import { createClient } from 'redis';
import axios from 'axios';
import querystring from 'querystring';
import Cookies from 'cookies'; // For storing cookies on Vercel
import { NextResponse } from 'next/server';

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const redirect_uri = process.env.SPOTIFY_REDIRECT_URI;

// Set up Redis client with better error handling
const redisClient = createClient({
  url: process.env.REDIS_URL,  // Your Redis connection string (e.g., from Upstash)
  socket: {
    tls: true,
    rejectUnauthorized: false,  // For self-signed certs or providers like Upstash
  },
});

// Wrap the Redis connection in an async function
async function connectRedis() {
  try {
    await redisClient.connect();
    console.log('Redis connected successfully');
  } catch (err) {
    console.error('Error connecting to Redis:', err);
  }
}

// Attempt to connect to Redis
connectRedis();

// Optionally, handle Redis connection errors on runtime
redisClient.on('error', (err) => {
  console.error('Redis error:', err);
});

export const handler = async (req) => {
  const cookies = new Cookies(req);
  let access_token = cookies.get('access_token'); // Fetch from cookies
  let refresh_token = cookies.get('refresh_token'); // Fetch refresh token
  console.log('Access token from cookies:', access_token); // Debugging token

  // If access token exists, fetch the last played song directly
  if (access_token) {
    return await fetchLastPlayedSong(req, access_token, refresh_token);
  }

  // If no access token, handle the login flow
  if (req.url.includes('action=login')) {
    const scope = 'user-read-recently-played';
    const authURL = `https://accounts.spotify.com/authorize?${querystring.stringify({
      response_type: 'code',
      client_id,
      scope,
      redirect_uri,
      state: generateRandomString(16),
    })}`;
    return NextResponse.redirect(authURL);
  }

  // Callback from Spotify after login
  if (req.url.startsWith('/api/callback')) {
    const { code, state } = req.query;
    if (!code || !state) {
      return NextResponse.json({ error: 'State mismatch or missing parameters' }, { status: 400 });
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

      // Set cookie based on protocol (secure cookies only for HTTPS)
      const cookieOptions = {
        httpOnly: true,
        maxAge: 3600 * 1000, // 1 hour for access_token
      };

      if (req.headers['x-forwarded-proto'] === 'https') {
        cookieOptions.secure = true;  // Set the secure cookie only if the request is over HTTPS
      }

      // Save tokens to cookies (set expiration times as needed)
      cookies.set('access_token', newAccessToken, cookieOptions);
      cookies.set('refresh_token', newRefreshToken, { ...cookieOptions, maxAge: 7 * 24 * 3600 * 1000 }); // 7 days for refresh_token

      return await fetchLastPlayedSong(req, newAccessToken, newRefreshToken);
    } catch (error) {
      console.error('Error fetching token from Spotify:', error.response ? error.response.data : error.message);
      return NextResponse.json({ error: 'Failed to fetch data from Spotify', details: error.response ? error.response.data : error.message }, { status: 500 });
    }
  }

  return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
}

// Fetch the last played song with Redis caching
async function fetchLastPlayedSong(req, token, refresh_token) {
  try {
    // Check if last played song is in cache
    const cachedSong = await redisClient.get('lastPlayedSong');
    
    if (cachedSong) {
      console.log('Cache hit');
      return NextResponse.json(JSON.parse(cachedSong));  // Return cached data
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

    return NextResponse.json(lastPlayedSong);
  } catch (error) {
    console.error('Error fetching last played song:', error.response ? error.response.data : error.message);

    // If the access token has expired, refresh it using the refresh token
    if (error.response && error.response.status === 401) {
      const newAccessToken = await refreshAccessToken(refresh_token);
      if (!newAccessToken) {
        return NextResponse.json({ error: 'Unable to refresh access token' }, { status: 401 });
      }
      // After refreshing the token, fetch the last played song again
      return await fetchLastPlayedSong(req, newAccessToken);
    }

    return NextResponse.json({ error: 'Failed to fetch data from Spotify', details: error.response ? error.response.data : error.message }, { status: 500 });
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





