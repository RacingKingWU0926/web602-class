// (con'd from `exp_demo3a.js`) as the router defined in `exp_demo3a.js` is exported here,
// we are treating that router as a dependency to the Express application defined in this script.

var express = require('express');
var app = express();

// Inject `router` dependency from `exp_demo3a.js`
var routedemo = require('./exp_demo3a.js');

// And then do `app.use()` for the router to be active in the main application,
// in route `/routedemo` defined here, followed by `/home` defined in `exp_demo3a.js`.
app.use('/routedemo', routedemo);

// As we are done, we will hit the URL `localhost:3000/routedemo/home`, and we should see "Hello world!"
app.listen(3000);
