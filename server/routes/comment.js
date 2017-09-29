'use strict'
var express = require('express');
var router = express.Router();
const autentifikasi = require('../helpers/auth')
const autorisasikomen = require('../helpers/autorkomen')
const posts = require('../models/posts')
const users = require('../models/users')
const comments = require('../models/comments')
const jwt = require('jsonwebtoken');
require('dotenv').config();


router.get('/:id', autentifikasi, (req, res) => {
    comments.find({postId: req.params.id})
    .populate('postId')
    .then(response => {
        res.send(response)
    })
    .catch(err => res.send(err))
})

router.post('/:id', autentifikasi, (req, res) => {
    var decoded = jwt.verify(req.headers.token, process.env.JWT_SECRET);
    comments.create({
        comment: req.body.comment,
        postId: req.params.id,
        authorId: decoded.id
    })
    .then(commentext => {
        res.send({
            message: 'Comment sudah dibuat',
            data: commentext
        })
    })
    .catch(err => res.send(err))
})

router.put('/:id', autentifikasi, autorisasikomen, (req, res) => {
    comments.update({
        _id: req.params.id
    }, {
        comment: req.body.comment
    })
    .then(notification => {
        res.send('Comment sudah diedit')
    })
    .catch(err => res.send(err))
})

router.delete('/:id', autentifikasi, autorisasikomen, (req, res) => {
    comments.remove({
        _id: req.params.id
    })
    .then(() => {
        res.send('Comment Sudah Terhapus')
    })
    .catch(err => {res.send(err)})
})

module.exports = router