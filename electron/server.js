const nodeStatic = require('node-static');
const file = new nodeStatic.Server(`${__dirname}/public`);

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response)
    }).resume()
}).listen(9990);
