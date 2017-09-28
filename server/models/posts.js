const mongoose = require('mongoose')

const postsSchema = new mongoose.Schema({
  caption: String,
  img: String,
  author: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
}, {
  timestamps: true
})

const Post = mongoose.model('Post', postsSchema)

module.exports = Post
