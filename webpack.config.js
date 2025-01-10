// const path = require('path');

// module.exports = {
//     entry: './src/index.js', 
//     output: {
//      filename: 'bundle.js', 
//      path: path.resolve(__dirname, 'dist'), 
//      publicPath: '/',
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.css$/i, 
//                 use: ['style-loader', 'css-loader'], 
//             }, 
//             {
//                 test: /\.(png|svg|jpg|jpeg|gif)$/i, 
//                 type: 'asset/resource',  
//             }, 
//             {
//                 test: /\.(woff|woff2|eot|ttf|otf)$/i, 
//                 type: 'asset/resource', 
//             }
//         ], 
//     }, 
//     mode: 'development', 
//     devtool: 'inline-source-map',
// };
// const path = require('path');
// const webpack = require('webpack');

// module.exports = {
//     entry: ['./src/index.js', 'webpack-hot-middleware/client'], // Add HMR client
//     output: {
//         filename: 'bundle.js', // Name of the output bundle
//         path: path.resolve(__dirname, 'public'), // Change to `public` directory for Vercel compatibility
//         publicPath: '/', // Serve assets relative to the root
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.css$/i,
//                 use: ['style-loader', 'css-loader'], // Handle CSS files
//             },
//             {
//                 test: /\.(png|svg|jpg|jpeg|gif)$/i,
//                 type: 'asset/resource', // Handle image files and output them as static assets in the public directory
//                 generator: {
//                     filename: 'assets/img/[name][ext]', // Customize path for images (e.g., public/assets/img/)
//                 },
//             },
//             {
//                 test: /\.(woff|woff2|eot|ttf|otf)$/i,
//                 type: 'asset/resource', // Handle font files
//                 generator: {
//                     filename: 'assets/fonts/[name][ext]', // Customize path for fonts (e.g., public/assets/fonts/)
//                 },
//             },
//             {
//                 test: /\.(mp3|wav|ogg)$/i, // Add any audio files you need
//                 type: 'asset/resource', // Handle audio files
//                 generator: {
//                     filename: 'assets/audio/[name][ext]', // Customize path for audio files (e.g., public/assets/audio/)
//                 },
//             },
//         ],
//     },
//     mode: process.env.NODE_ENV === 'production' ? 'production' : 'development', // Use environment variable to toggle mode
//     devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'inline-source-map', // Use appropriate source maps
//     plugins: [
//         new webpack.HotModuleReplacementPlugin(), // Enable HMR (development only)
//     ],
//     resolve: {
//         extensions: ['.js', '.json'], // Simplify imports
//     },
// };
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js', 
    output: {
        filename: 'bundle.js', 
        path: path.resolve(__dirname, 'public'),  // Output to the `public` directory
        publicPath: '/',  // Serve assets from the root
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'], // Handle CSS files
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                loader: 'file-loader',
                options: {
                  name: 'img/[name].[ext]',
                  outputPath: 'img/',  // Place in the img folder
                },
              },              
            {
                test: /\.(mp3|wav|ogg)$/i,
                type: 'asset/resource',  // Built-in Webpack 5 solution for audio
                generator: {
                    filename: 'audio/[name][ext]',  // Output audio to `public/audio/` folder
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',  // Use asset/resource for fonts in Webpack 5
                generator: {
                    filename: 'fonts/[name][ext]',  // Output fonts to `public/fonts/` folder
                },
            },
        ],
    },
    mode: 'development', // Change to 'production' for production builds
    devtool: 'inline-source-map', // Use source maps for debugging
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // Enable HMR for development
        new HtmlWebpackPlugin({
            template: './src/index.html',  // Path to your index.html
            filename: 'index.html',        // Output file in `public`
            inject: true,  // Automatically injects script and link tags for JS and CSS files
        }),
    ],
    resolve: {
        extensions: ['.js', '.json'], // Simplify imports
    },
};
