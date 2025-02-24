const axios = require('axios');
const querystring = require('querystring');

const client_id = process.env.SPOTIFY_CLIENT_ID; // Store in Vercel Environment Variables
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const redirect_uri = process.env.SPOTIFY_REDIRECT_URI; // Update to Vercel's domain

let lastPlayedSong = null;

module.exports = async (req, res) => {
    const { action, code, state } = req.query;

    // Login action to Spotify
    if (action === 'login') {
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

    // Handle Spotify callback (after user logs in)
    if (req.url.startsWith('/api/callback')) {
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

            const { access_token } = tokenResponse.data;

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

            return res.json({ message: 'Last played song fetched successfully!' });
        } catch (error) {
            console.error('Error fetching data from Spotify:', error);
            return res.status(500).json({ error: 'Failed to fetch data from Spotify' });
        }
    }

    // Fetch the last played song
    if (req.url.startsWith('/api/last-song')) {
        if (!lastPlayedSong) {
            return res.status(404).json({ error: 'No song data available. Fetch the song first.' });
        }
        return res.json(lastPlayedSong);
    }

    return res.status(400).json({ error: 'Invalid request' });
};

// Helper function to generate random strings (for state)
function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
