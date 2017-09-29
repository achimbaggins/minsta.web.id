const mongoose = require('mongoose')

const commentsSchema = mongoose.Schema({
  comment: String,
  post: {type: mongoose.Schema.Types.ObjectId, ref: "posts"},
  author: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
}, {
  timestamps: true
})

const Comment = mongoose.model('Comments', commentsSchema)

module.exports = Comment
