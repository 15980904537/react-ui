let path = require("path");
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode:'production',
    entry: {
        index: "./lib/index.tsx",
    },
    output: {
        path: path.resolve(__dirname, "dist / lib"),
        library: "ReactUI",
        libraryTarget: "umd",
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader",
            },
        ],

    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'ReactUI',
            template:'index.html'
        })
]
};
