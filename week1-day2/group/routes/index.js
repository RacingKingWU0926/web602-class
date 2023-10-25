var express = require('express');
var router = express.Router();

/* GET home page. */
router.get(['/', '/index'], (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/index/:userName', (req, res, next) => {
  
  // add a simple authorization check from the header
  if (req.params.userName != "admin") {
    res.send("Unauthorized!");
  } else {
    res.render('welcome', { title: 'Welcome!', userName: req.params});
  }

});

module.exports = router;
