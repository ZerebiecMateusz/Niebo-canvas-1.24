const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['./src/index.js', './scss/style.scss'],

    mode: 'development',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },

    devServer: {
        static: {
            directory: path.join(__dirname, 'public')
          },
        compress: true,
        port: 3000,
        hot: true,
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                type: 'asset/resource'
             },
             {
                test: /\.html$/i,
                loader: "html-loader",
              },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({template: './index.html'}),
        new webpack.HotModuleReplacementPlugin(),
    ]
};