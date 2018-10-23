var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.config.js');

a = webpackMerge(commonConfig, {
    mode: 'production',
    output: {
        publicPath: '',
        filename: '[name].[hash].js',
        chunkFilename: '[id].[hash].chunk.js'
    },
    // optimization: {
    //     minimize: true,
    //     splitChunks: {
    //         chunks: 'all'
    //     }
    // }
});
module.exports = a