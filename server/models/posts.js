const mongoose = require('mongoose')

const postsSchema = mongoose.Schema({
  caption: String,
  img: String,
  author: {type: mongoose.Schema.Types.ObjectId, ref: "users"}
}, {
  timestamps: true
})

const Post = mongoose.model('posts', postsSchema)

module.exports = Post
