let path = require("path");

let base = require('./webpack.config')
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = Object.assign({}, base, {
    mode: 'production',
    entry: {
        ...base.entry,
        index: "./example.tsx",
    },
    output: {
        path: path.resolve(__dirname, "doc"),
      
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'ReactUI',
            template: 'example.html',
            filename:'example.html'
        })
    ]
}) ;
