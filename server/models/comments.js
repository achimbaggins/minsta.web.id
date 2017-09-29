const mongoose = require('mongoose')

const commentsSchema = mongoose.Schema({
  comment: String,
  postId: {type: mongoose.Schema.Types.ObjectId, ref: "posts"},
  authorId: {type: mongoose.Schema.Types.ObjectId, ref: "users"}
}, {
  timestamps: true
})

const Comment = mongoose.model('comments', commentsSchema)

module.exports = Comment
