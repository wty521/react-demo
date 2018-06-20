const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const webpack = require('webpack');

module.exports = {
    mode: "development",
    entry: {
        app: path.join(__dirname, '../src/index.js'),
        // common: [
        // ]
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].js',
        publicPath: ''
    },
    resolve: {
        alias: {
            'antd': path.resolve(__dirname, "../node_modules/antd")
        },
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude:  /node_modules/,
                loader: ['babel-loader']
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
                
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
		new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'test',
            template: './src/index.html'
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify("development")
            },
        }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'common',
        //     filename: 'common.js'
        // }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            React: 'react',
            ReactDOM: 'react-dom',
        }),
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, "../src"),
        port: 8113,
        host: 'localhost',
        compress: true
    }
}