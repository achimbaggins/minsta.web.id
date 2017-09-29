const jwt = require('jsonwebtoken');
require('dotenv').config()

module.exports = (req, res, next) => {
  var token = req.headers.token;
  var jwtLogin = jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.log('err: ', err);
      res.send('Belum login')
    } else {
        console.log('hasilnya : ',decoded);
        req.jwtLogin = decoded
        next()
    }
  })
}
