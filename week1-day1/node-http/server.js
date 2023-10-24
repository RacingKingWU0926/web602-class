// Start a Node.js application defined in the `package.json` file.

// import modules
var http = require('http');
var path = require('path');
var fs = require('fs');

// declare host and port
var hostname = 'localhost';
var port = 3000;

// server start
var server = http.createServer((req, res) => {
    console.log(req.headers);

    if (req.method == "GET") {
        var fileUrl = req.url;
        if (fileUrl === '/') {
            fileUrl = '/index.html';  // we are going to read data from `index.html`
        }

        var filePath = path.resolve('./public' + fileUrl);
        var fileExt = path.extname(filePath);

        if (fileExt === '.html') {
            fs.access(filePath, function(err) {
                if (err) {
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/html');
                    res.end(`<html><body><h1>Error 404: ${fileUrl} not found</h1></body></html>`);
                } else {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/html');

                    // `createReadStream` returns a readable stream that allows you to read data from the specified file.
                    // Then, connect the readable stream to a writable stream, which, in this case, is the reference ( `res`) of the HTTP response object.
                    // So, you are effectively taking the data read from `fileUrl`, and sending it as the response body of an HTTP request.
                    fs.createReadStream(filePath).pipe(res);
                }
            })
        } else {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end(`<html><body><h1>Error 404: ${fileUrl} not found</h1></body></html>`);
        } 
    } else {
        res.statusCode = 405;
        res.setHeader('Content-Type', 'text/html');
        res.end(`<html><body><h1>Error 405: Method not allowed for ${fileUrl}</h1></body></html>`);
    }

});

server.listen(port, hostname, () => {
    console.log(`Server running at http:${hostname}:${port}/`);
});
