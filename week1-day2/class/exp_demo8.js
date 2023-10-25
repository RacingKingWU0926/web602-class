// In this demo, nothing is added. Just read the code below,
// and think about how the flow is controlled by `next()`.

// As visualization, you would see "Start" and "End" in pairs in the log,
// and "Middle" in the index page.

var express = require('express');
var app = express();

///First middleware before response is sent
app.use(function(req, res, next){
    console.log("Start");
    next();
 });
 
 //Route handler
 app.get('/', function(req, res, next){
    res.send("Middle");
    next();
 });
 
 app.use('/', function(req, res){
    console.log('End');
 });

app.listen(3000);
