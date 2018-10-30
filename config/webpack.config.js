const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production'
var utils = require('./utils');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './js/index.js',
    module: {
        rules: ([
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'resolve-url-loader',
                    {
                        loader: "sass-loader", options: {
                            sourceMap: true
                        }
                    }
                ],
            },

            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'file-loader?limit=10000',
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'file-loader?limit=10000',
            },
            {
                test: /\.js$/,
                exclude: [
                    path.resolve('./node_modules/fullpage.js/dist/fullpage.js'),
                    path.resolve('./node_modules/fullpage.js/vendors/scrolloverflow.js')
                ],
                loader: 'babel-loader',
                query: {

                    presets: ['es2015']
                }
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        attrs: ['img:src', 'link:href']
                        // minimize: true
                    }
                }],
            }
        ])
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'checkout.html',
            template: 'checkout.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'thank-you.html',
            template: 'thank-you.html'
        }),
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
        })
    ]
};