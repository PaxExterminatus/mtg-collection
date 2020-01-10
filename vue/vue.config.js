const configureWebpack = require('./webpack.config');

module.exports = {
    outputDir: '../electron/public',
    chainWebpack: config =>
    {
        config.entry('app').clear();
        config.entry('app').add('./scss/app.scss').add('./app/index.ts').end();

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