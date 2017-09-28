const mongoose = require('mongoose')

const commentsSchema = new mongoose.Schema({
  comment: String,
  post: {type: mongoose.Schema.Types.ObjectId, ref: "Post"},
  author: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
}, {
  timestamps: true
})

const Comment = mongoose.model('Comment', commentsSchema)

module.exports = Comment
