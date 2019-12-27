const nodeStatic = require('node-static');
const file = new nodeStatic.Server(`${__dirname}/public`);
const http = require('http');

http.createServer((req, res) => {

    if (/\/api/.test(req.url))
    {
        if (/\/collection/.test(req.url))
        {
            let collection = require('./public/api/collection.json');
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(collection));
        }
    }

    req.addListener('end', () => {
        file.serve(req, res)
    }).resume()

}).listen(9990);
