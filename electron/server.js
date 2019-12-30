const nodeStatic = require('node-static');
const file = new nodeStatic.Server(`${__dirname}/public`);
const http = require('http');
const fs = require('fs');

http.createServer((request, res) => {

    const { method, url } = request;

    if (/\/api/.test(url))
    {
        res.writeHead(200, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Request-Method': '*',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Headers': '*',
        });

        if (method === 'OPTIONS') {
            res.end();
        }

        if (/\/api\/collection/.test(url))
        {
            let collection = require('./public/api/collection.json');

            if (method === 'GET')
            {
                res.end(JSON.stringify(collection));
            }

            if (method === 'POST')
            {
                let body = [];

                request.on('data', chunk => {
                    body.push(chunk);
                }).on('end', () => {
                    body = Buffer.concat(body).toString();
                    collection.cards.push(JSON.parse(body));

                    const json = JSON.stringify(collection);

                    fs.writeFile('./public/api/collection.json', json, 'utf8', () => {
                        res.end();
                    });
                });
            }
        }
    }

    request.addListener('end', () => {
        file.serve(request, res)
    }).resume()

}).listen(9990);
