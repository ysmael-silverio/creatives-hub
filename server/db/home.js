const connection = require('./connection')

function getHome(db = connection) {
  return db('home').select()
}

module.exports = {
  getHome,
}
