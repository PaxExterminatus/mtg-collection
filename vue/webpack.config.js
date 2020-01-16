const path = require('path');
const HTMLInlineCSSWebpackPlugin = require("html-inline-css-webpack-plugin").default;

module.exports = {
    resolve: {
        alias: {
            app: path.resolve(__dirname, './app'),
            lib: path.resolve(__dirname, './lib'),
        },
        extensions: [],
    },

    output: {
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].js',
    },

    plugins: [
        new HTMLInlineCSSWebpackPlugin({
            filter(fileName) {
                return fileName.includes('inline');
            },
        }),
    ],
};
