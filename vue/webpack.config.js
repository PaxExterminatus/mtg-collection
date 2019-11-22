const path = require('path');
const HTMLInlineCSSWebpackPlugin = require("html-inline-css-webpack-plugin").default;

module.exports = {
    // entry: {
    //     inline: ['./src-style/inline.scss'],
    // },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            lib: path.resolve(__dirname, './src/lib'),
        },
        extensions: [],
    },

    output: {
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].js'
    },


    // module: {
    //     rules: [
    //         {
    //             test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
    //             use: 'base64-inline-loader?limit=1000&name=[name].[ext]'
    //         }
    //     ]
    // },


    plugins: [
        new HTMLInlineCSSWebpackPlugin({
            filter(fileName) {
                return fileName.includes('inline');
            },
        }),
    ],
};
