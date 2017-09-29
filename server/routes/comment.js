'use strict'
var express = require('express');
var router = express.Router();
const autentifikasi = require('../helpers/auth')
const autorisasi = require('../helpers/autor')
const posts = require('../models/posts')
const users = require('../models/users')
const comments = require('../models/comments')
const jwt = require('jsonwebtoken');
require('dotenv').config();


router.get('/:id', autentifikasi, (req, res) => {
    comments.find({post: req.params.id})
    .populate({path: 'Post', models: 'posts'})
    .then(response => {
        res.send(response)
    })
    .catch(err => res.send(err))
})

router.post('/:id', autentifikasi, (req, res) => {
    var decoded = jwt.verify(req.headers.token, process.env.JWT_SECRET);
    comments.create({
        comment: req.body.comment,
        post: req.params.id,
        author: decoded.id
    })
    .then(commentext => {
        res.send({
            message: 'Comment sudah dibuat',
            data: commentext
        })
    })
    .catch(err => res.send(err))
})

module.exports = router