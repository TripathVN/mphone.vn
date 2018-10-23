var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.config.js');

module.exports = webpackMerge(commonConfig, {
    mode: 'production',
    optimization: {
        minimize: true,
        splitChunks: {
            chunks: 'all'
        }
    }
});