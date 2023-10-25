// In this demo, we will try to get a 404 response.

var express = require('express');
var app = express();

// Valid endpoints as we defined below
app.get('/home', (req, res) => {
    res.send('Home Page');
});
app.get('/about', (req, res) => {
    res.send('About');
});

// Now, we will specify that any endpoint other than the two defined above is invalid!
app.get('*', (req, res) => {
    res.statusCode = 404;
    res.send(`404! "${req.path}" not found!`);
});


// As we are done, hitting `localhost:3000/home` and `localhost:3000/about` should display "Home Page" and "About"
// respectively. Hitting any other endpoint should display "404! <path> not found"
app.listen(3000);
