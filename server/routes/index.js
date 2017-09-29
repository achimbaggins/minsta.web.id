'use strict'
var express = require('express');
var router = express.Router();
const users = require('../controller/login')
const FB = require('fb')
const fb = new FB.Facebook({version: 'v2.10'});
const setAccessToken = (req, res, next) => {
  FB.setAccessToken(req.headers.fbaccesstoken);
  next()
}
const images = require('../helpers/images')
const autentifikasi = require('../helpers/auth')
const autorisasi = require('../helpers/autor')
const posts = require('../models/posts')

router.get('/', autentifikasi, function(req, res) {
    posts.find()
    .populate('author')
    .then(response => {
      res.send(response)
    })
    .catch(err => res.send(err))
  });

  router.get('/userphoto/:id', autentifikasi, function(req, res) {
    posts.find({author: req.params.id})
    .populate('author')
    .then(response => {
      res.send(response)
    })
    .catch(err => res.send(err))
  });

  router.get('/detail/:id', autentifikasi, function(req, res) {
    posts.find({_id: req.params.id})
    .populate('author')
    .then(response => {
      res.send(response)
    })
    .catch(err => res.send(err))
  });

  router.post('/posts',
  autentifikasi,
  images.multer.single('img'), 
  images.sendUploadToGCS,
  (req, res) => {
    posts.create({
      caption: req.body.caption,
      author: req.body.author,
      img: req.file.cloudStoragePublicUrl
    })
    .then(data => {
      console.log(data)
      res.send({
        status: 200,
        message: 'Your file is successfully uploaded',
        link: req.file.cloudStoragePublicUrl
        })
    })
    .catch(err => res.send(err))
  })

router.delete('/:id', autentifikasi, autorisasi, function(req, res) {
  posts.remove({_id: req.params.id})
  .then(() => {
    res.send('Sudah terhapus')
  })
  .catch(err => res.send(err))
})

router.put('/:id', autentifikasi, autorisasi, function(req, res) {
  posts.update({
    _id: req.params.id
}, {
    caption: req.body.caption
})
.then(notification => {
    res.send('Data posts sudah terupdate')
})
.catch(err => res.send(err))

})


router.post('/login', setAccessToken, users.login)

module.exports = router






