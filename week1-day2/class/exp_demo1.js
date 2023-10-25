// Create our first app using Express!

// Before this, make sure you have run `npm init` and `npm install express --save`.

var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send("Hello world!");
})

app.listen(3000)
