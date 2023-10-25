// In this exercise, we will demonstrate a different way of doing routing.

// In `exp_demo2.js`, we are creating a single Express application using `express()`.
// We defined a route using `app.get('/hello', ...)` to handle GET requests to the `/hello` URL.
// When a request is made to `/hello`, the callback function is executed, and it responds with "Hello world!".

// In this demo, we will create an Express router using `express.Router()`.
// Routers are like mini Express applications that can be used to modularize your routes.
var express = require('express');
var app = express();
var router = express.Router();

router.get('/home', function(req, res) {
    res.send("Hello world!");
})

router.post('/home', function(req, res) {
    res.send("You just call the POST method at '/hello'!");
})

// Such routers need to be added to your main Express app.
// Use `app.use(router)` for the router to be active in the main application.

// In this demo, the main Express app is defined in `exp_demo3b.js`,
// so we will specify that `router` will be exported.
module.exports = router;
