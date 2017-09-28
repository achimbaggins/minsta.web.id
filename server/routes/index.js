var express = require('express');
var router = express.Router();
const users = require('../controller/login')
const FB = require('fb')
const fb = new FB.Facebook({version: 'v2.10'});
const setAccessToken = (req, res, next) => {
  FB.setAccessToken(req.headers.fbaccesstoken);
  next()
}

router.get('/', function(req, res, next) {
  res.send({ status: 'Minsta is live' });
});

router.post('/login', setAccessToken, users.login)

module.exports = router;
