const path = require("path");
const configureWebpack = require('./webpack.config');

module.exports = {
    outputDir: '../electron/public',
    chainWebpack: config =>
    {
        config.entry('app').add('./src/scss/main.scss').end();

        if(config.plugins.has('extract-css'))
        {
            const extractCSSPlugin = config.plugin('extract-css');
            extractCSSPlugin && extractCSSPlugin.tap(() => [{
                filename: 'css/[name].css',
                chunkFilename: 'css/[name].css'
            }])
        }
    },

    configureWebpack,

    css: {
      sourceMap: true
    },
};
