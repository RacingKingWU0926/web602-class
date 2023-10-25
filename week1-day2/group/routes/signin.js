var express = require('express');
var router = express.Router();

/* GET /signin */
router.get('/', function(req, res, next) {
    res.render('signin', { title: 'Sign in'});
});

/* POST /signin */
router.post('/', (req, res) => {
    const { username, password } = req.body;

    if (username != "admin" || password != "admin") {
        res.send("Invalid username or password");
    } else {
        res.redirect(`/index/admin`);
    }
});


module.exports = router;
