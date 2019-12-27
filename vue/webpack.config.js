const path = require('path');
const HTMLInlineCSSWebpackPlugin = require("html-inline-css-webpack-plugin").default;

module.exports = {
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            lib: path.resolve(__dirname, './src/lib'),
        },
        extensions: [],
    },

    output: {
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].js',
    },

    // devServer: {
    //     historyApiFallback: true,
    //     watchOptions: { aggregateTimeout: 300, poll: 1000 },
    //     headers: {
    //         "Access-Control-Allow-Origin": "*",
    //         "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    //         "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    //     },
    // },

    plugins: [
        new HTMLInlineCSSWebpackPlugin({
            filter(fileName) {
                return fileName.includes('inline');
            },
        }),
    ],
};
