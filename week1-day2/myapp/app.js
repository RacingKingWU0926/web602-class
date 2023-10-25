const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World This is Express!')
});

// After you are done, run `node app` to view the index page on `http://localhost:3000/`!
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});
