const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        "codes-netvis": "./index.js",
        "codes-netvis.min": "./index.js"
    },
    devtool: "source-map",
    target: 'web',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },
    plugins: [
        new UglifyJsPlugin({
            include: /\.min\.js$/,
            sourceMap: true
        })
    ]
};