const jwt = require('jsonwebtoken');
require('dotenv').config()
const comments = require('../models/comments')

module.exports = (req, res, next) => {
    comments.findOne({
        _id: req.params.id
    })
    .then(data => {
        console.log('ini data ' + data)
        var token = req.headers.token;
        var jwtLogin = jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            console.log('Ini decoded ' + JSON.stringify(decoded))
          if (decoded.id != data.authorId) {
            console.log('err: ', err);
            res.send('Anda bukan pemilik item ini')
          } else {
              console.log('hasilnya : ',decoded);
              req.jwtLogin = decoded
              next()
          }
        // if (err) {
        //     res.send(err)
        // } else {
        //     res.send(decoded)
        // }
        })
    })
    .catch(err => res.send(err))
}
