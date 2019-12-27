const nodeStatic = require('node-static');
const file = new nodeStatic.Server(`${__dirname}/public`);
const http = require('http');

http.createServer((req, res) => {

    if (/\/api/.test(req.url))
    {
        res.writeHead(200, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Request-Method': '*',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Headers': '*',
        });

        if (/\/collection/.test(req.url))
        {
            let collection = require('./public/api/collection.json');
            res.end(JSON.stringify(collection));
        }
    }

    req.addListener('end', () => {
        file.serve(req, res)
    }).resume()

}).listen(9990);
