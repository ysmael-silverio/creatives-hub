const connection = require('./connection')

function getComments(db = connection) {
  return db('comments').select()
}

function getCommentsByPostId(id, db = connection) {
  return db('comments').where('post_id', id).select()
}

function addComment(comment, db = connection) {
  return db('comments').insert(comment)
}

module.exports = {
  getComments,
  getCommentsByPostId,
  addComment,
}
