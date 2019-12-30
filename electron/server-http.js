// const nodeStatic = require('node-static');
// const file = new nodeStatic.Server(`${__dirname}/public`);
// const http = require('http');
// const fs = require('fs');
//
// http.createServer((request, res) => {
//
//     const { method, url } = request;
//
//     if (/\/api/.test(url))
//     {
//         res.writeHead(200, {
//             'Content-Type': 'application/json',
//             'Access-Control-Allow-Origin': '*',
//             'Access-Control-Request-Method': '*',
//             'Access-Control-Allow-Methods': '*',
//             'Access-Control-Allow-Headers': '*',
//         });
//
//         if (method === 'OPTIONS') {
//             res.end();
//         }
//
//         if (/\/api\/collection/.test(url))
//         {
//             let collection = require('./public/api/collection.json');
//
//             if (method === 'GET')
//             {
//                 res.end(JSON.stringify(collection));
//             }
//
//             if (method === 'POST')
//             {
//                 let body = '';
//
//                 request.on('data', chunk => {
//                     body += chunk;
//                 }).on('end', () => {
//                     const card = JSON.parse(body);
//                     collection.cards.push(card);
//
//                     fs.writeFile('./public/api/collection.json', JSON.stringify(collection), 'utf8', () => {
//                         res.end('OK');
//                     });
//                 });
//             }
//         }
//     }
//
//     request.addListener('end', () => {
//         file.serve(request, res)
//     }).resume()
//
// }).listen(9990);
