// In this demo, we will demonstrate the use of a middleware using `app.use()`.

var express = require('express');
var app = express();


// In this case, we will create a custom middleware (a function) to log request time,
// and pass it to `app.use(.)` to mount the middleware to the Express application.
app.use(function(req, res, next) {
    console.log(`Request received: "${req.method} ${req.url}" at ${Date.now()}`)

    // Pass control to the next middleware, which is the router in this case.
    next();
});


// Route handler
app.get('/home', (req, res) => {
    res.send('Home Page');
});

app.get('/about', (req, res) => {
    res.send('About');
});

app.listen(3000);
