// Create a specfic route in our app!

var express = require('express');
var app = express();

app.get('/hello', function(req, res) {
    res.send("Hello world!");
})

// As we are done, we will hit the URL `localhost:3000/hello`, and we should see "Hello world!"
app.listen(3000);
