const path = require("path");
const configureWebpack = require('./webpack.config');

module.exports = {
    outputDir: '../electron/public',
    chainWebpack: config =>
    {
        config.entry('app').add('./src-style/app.scss').end();

        //config.module.rule('fonts').uses.clear();

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
