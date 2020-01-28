//files
const publicPath = `${__dirname}/public`;
//server
const express = require('express');
const app = express();
const port = 9990;

/// SPA urls
app.use('/', express.static(publicPath));
app.use('/collection', express.static(publicPath));
app.use('/exchange', express.static(publicPath));
app.use('/about', express.static(publicPath));

/// middleware
app.use(require('./server/middleware/application-level'));
app.use(require('body-parser').json());

/// routing
app.options('*', require('./server/controller/options'));
app.use('/api', require('./server/controller/collection'));

/// listen
app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
});