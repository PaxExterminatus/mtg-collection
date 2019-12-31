//files
const fs = require('fs');
const nodeStatic = require('node-static');
const pub = `${__dirname}/public`;
const file = new nodeStatic.Server(pub);
//server
const http = require('http');
const express = require('express');
const app = express();
const port = 9990;

const api = require('./middleware/api');

// routing
/// spa urls
app.use('/', express.static(pub));
app.use('/collection', express.static(pub));
app.use('/exchange', express.static(pub));
app.use('/about', express.static(pub));

app.use('/api', api);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');

    next();

    app.options('*', (req, res) => {
        res.header('Access-Control-Allow-Methods', '*');
        res.send();
    });
});



app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
});

/*
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
                let body = '';

                request.on('data', chunk => {
                    body += chunk;
                }).on('end', () => {
                    const card = JSON.parse(body);
                    collection.cards.push(card);

                    fs.writeFile('./public/api/collection.json', JSON.stringify(collection), 'utf8', () => {
                        res.end('OK');
                    });
                });
            }
        }
    } else {

    }

    request.addListener('end', () => {
        file.serve(request, res)
    }).resume();

}).listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
});
*/
