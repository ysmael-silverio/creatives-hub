const express = require('express')

const db = require('../db/home')

const router = express.Router()

router.get('/', (req, res) => {
  db.getHome()
    .then((results) => {
      res.json({ fruits: results.map((home) => home.name) })
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

module.exports = router
