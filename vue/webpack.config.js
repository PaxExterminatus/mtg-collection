const path = require('path');

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
        chunkFilename: 'js/[name].js'
    },
};
