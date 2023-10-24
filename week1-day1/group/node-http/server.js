// Start a Node.js application defined in the `package.json` file.

// import modules
var http = require('http');
var path = require('path');
var fs = require('fs');

// declare host and port
var hostname = 'localhost';
var port = 3002;

// server start
var server = http.createServer((req, res) => {
    console.log(req.headers);

    var fileUrl = req.url;
    if (fileUrl === '/') {
        fileUrl = 'index.html';  // we are going to read data from `index.html`
    }

    var filePath = path.resolve('./public' + fileUrl);
    fs.access(filePath, function(err) {
        if (err) {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end(`<html><body><h1>Error 404: ${fileUrl} not found</h1></body></html>`);
        } else {
            console.log(`Successfully read file ${filePath} with status code 200.`)
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            fs.createReadStream(filePath).pipe(res);
        }
    })
});

server.listen(port, hostname, () => {
    console.log(`Server running at http:${hostname}:${port}/`);
});
