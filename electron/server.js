const nodeStatic = require('node-static');
const file = new nodeStatic.Server(`${__dirname}/public`);

const http = require('http');

http.createServer((request, response) => {

    console.log(request.url);

    if (request.url === '/api') {
        response.setHeader("Content-Type", "text/html");
        response.write("<!DOCTYPE html>");
        response.write("<html>");
        response.write("<head>");
        response.write("<title>Hello Node.js</title>");
        response.write("<meta charset=\"utf-8\" />");
        response.write("</head>");
        response.write("<body><h2>Привет миг</h2></body>");
        response.write("</html>");
        response.end();
    }

    request.addListener('end', () => {
        file.serve(request, response)
    }).resume()
}).listen(9990);
