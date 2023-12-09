// in 'strict' mode, undeclared variables cannot be used
'use strict'

const express = require('express');
const app = express();

// set up an endpoint
app.get('/', (req, res) => {
    console.log('route \'/\' called');
    res.send({res: 'Sending 200 as response'});
})

// starting the app
app.listen(3000);
console.log('Express app is up and running on port 3000');
