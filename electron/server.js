const http = require('http');
const fs = require('fs');
const httpPort = 9990;
const nodeStatic = require('node-static');
const index = new nodeStatic.Server(`${__dirname}/public`);

http.createServer((req, res) => {
    fs.readFile('public/index.htm', 'utf-8', (err, content) => {
        if (err) {
            console.log('Невозможно открыть файл "index.htm".')
        }

        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });

        res.end(content)
    })
}).listen(httpPort, () => {
    console.log('run: http://localhost:%s', httpPort)
});
