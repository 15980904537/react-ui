let path = require("path");
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // mode:'production',
    entry: {
        index: "./lib/index.tsx",
    },
    // resolve: {
    //     extensions: ['.js', '.jsx', '.ts', '.tsx'],
    // },
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
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader'
            }, {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader','sass-loader']
            }
        ],

    },
    // externals: {
    //     react: {
    //         commonjs: 'react',
    //         commonjs2: 'react',
    //         amd: 'react',
    //         root: 'React',
    //     },
    //     'react-dom': {
    //         commonjs: 'react-dom',
    //         commonjs2: 'react-dom',
    //         amd: 'react-dom',
    //         root: 'ReactDOM',
    //     },
    // },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'ReactUI',
            template:'index.html'
        })
]
};
