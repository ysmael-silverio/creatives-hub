const express = require('express')

const db = require('../db/postFunc')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const posts = await db.getPosts()
    res.json(posts)
    return null
  } catch (err) {
    res.status(500).send('INTERNAL ERROR' + err.message)
  }
})

router.post('/', async (req, res) => {
  try {
    const post = req.body
    await db.addPost(post)
    res.sendStatus(201)
    return null
  } catch (err) {
    res.status(500).send('INTERNAL ERROR' + err.message)
  }
})

module.exports = router
