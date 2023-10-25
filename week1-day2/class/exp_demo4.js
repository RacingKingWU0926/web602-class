// In this demo, we will do the same thing, but we will simplify the callback syntax.
var express = require('express');
var app = express();

// Simplified callback syntax.
app.get('/home', (req, res) => {
    res.send('Home Page');
})

app.get('/about', (req, res) => {
    res.send('About');
})

// As we are done, we should see "Home Page" and "About", as we hit
// `localhost:3000/home` and `localhost:3000/about` respectively.
app.listen(3000);
