const connection = require('./connection')

function getPosts(db = connection) {
  return db('posts').select()
}

function addPost(post, db = connection) {
  return db('posts').insert(post)
}

module.exports = {
  getPosts,
  addPost,
}
