const Path = require('path');
const Webpack = require('webpack');
const vuxLoader = require('vux-loader');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

function resolve(dir) {
    return Path.join(__dirname, dir);
}

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        path: resolve('../dist'),
        filename: 'iui-view.min.js'
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
            // options: {
            //     loaders: {
            //         less: ExtractTextPlugin.extract({
            //             use: ['css-loader?minimize', 'autoprefixer-loader', 'less-loader'],
            //             fallback: 'vue-style-loader'
            //         }),

            //         css: ExtractTextPlugin.extract({
            //             use: ['css-loader?minimize', 'autoprefixer-loader'],
            //             fallback: 'vue-style-loader'
            //         })
            //     }
            // }
        }, {
            test: /iview\/.*?js$/,
            loader: 'babel-loader'
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: ['css-loader?minimize', 'autoprefixer-loader'],
                fallback: 'style-loader'
            })
        }, {
            test: /\.less/,
            use: ExtractTextPlugin.extract({
                use: ['autoprefixer-loader', 'less-loader', 'css-loader'],
                fallback: 'style-loader'
            })
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass?sourceMap'
        }, {
            test: /\.(gif|jpg|png)\??.*$/,
            loader: 'url-loader?limit=8&name=images/[hash:8].[name].[ext]'
        }, {
            test: /\.(woff|svg|eot|ttf)\??.*$/,
            loader: 'url-loader?limit=8&name=fonts/[name].[ext]'
        }, {
            test: /\.(html|tpl)$/,
            loader: 'html-loader'
        }]
    },
    plugins: [
        new Webpack.BannerPlugin("..lexloo..")
    ],
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            // 'vue': 'vue/dist/vue.esm.js'
        }
    }
}