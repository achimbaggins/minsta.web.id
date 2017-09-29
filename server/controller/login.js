const db = require('../models/users')
const jwt = require('jsonwebtoken')
const FB = require('fb')
require('dotenv').config()

const login = (req, res) => {
  FB.api('/me', {fields: ['id','name','email','picture']}, (response) => {
    // res.send(response)
    console.log('ini response fb', response);

    db.find({fb_id: response.id})
    .then(result => {
      if(result.length === 0){
        db.create({
          fb_id: response.id,
          email: response.email,
          img: response.picture.data.url,
          name: response.name
        })
        .then(rows =>{
          console.log(rows)
          var siapBungkus = {
            id: rows._id,
            fb_id: rows.fb_id,
            email: rows.email,
            name: rows.name
          }
          var token = jwt.sign(siapBungkus, process.env.JWT_SECRET)
          console.log('tokennya', token);
          res.send({token: token, name: rows.name, id: rows._id})
        })
        .catch(err =>{
          res.send(err)
        })
      } else {
        var siapBungkus = {
          id: result[0]._id,
          fb_id: result[0].fb_id,
          email: result[0].email,
          name: result[0].name
        }
        var token = jwt.sign(siapBungkus, process.env.JWT_SECRET)
        console.log('tokennya', token);
        console.log('namanya', result);
        res.send({token: token, name: result[0].name, id: result[0]._id})
      }
    })
  })
}



module.exports = {
  login,
}
