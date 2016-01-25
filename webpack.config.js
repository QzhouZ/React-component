var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = function(options) {
    var config = {
        entry: [
            './app.js'
        ],
        output: {
            path: path.join(__dirname, '/build'),
            filename: 'bundle.js',
            publicPath: './build/'
        },
        module: {
            loaders: [{
                test: /\.jsx?$/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                },
                exclude: /node_modules/
            },{
              test: /\.less$/,
              loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            }, {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }],
            noParse: [/moment-with-locales/]
        },
        resolve: {
            extensions: ['', '.js', '.jsx', '.json', '.coffee'],
            alias: {
                
            }
        }
    };

    // 开发模式
    if (options.environment === 'dev') {
        config.devtool = 'source-map';
        Array.prototype.unshift.call(
            config.entry,
            'webpack-dev-server/client?http://127.0.0.1:3000',
            'webpack/hot/only-dev-server'
        );
        config.plugins = [
            new ExtractTextPlugin("app.css"),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin()
        ];
        config.module.loaders.unshift({
            test: /\.jsx?$/,
            loader: 'react-hot',
            exclude: /node_modules/
        });
    } else {
        config.plugins = [
            new ExtractTextPlugin("app.css")
        ];
    }
    return config;
};