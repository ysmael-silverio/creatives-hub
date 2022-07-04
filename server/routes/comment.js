const express = require('express')

const db = require('../db/commentFunc')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const comment = await db.getComments()
    res.json(comment)
    return null
  } catch (err) {
    res.status(500).send('INTERNAL ERROR' + err.message)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const selectedComment = await db.getCommentById(id)
    res.json(selectedComment)
    return null
  } catch (err) {
    res.status(500).send('INTERNAL ERROR' + err.message)
  }
})

router.post('/', async (req, res) => {
  try {
    const comment = req.body
    await db.addComment(comment)
    res.sendStatus(201)
    return null
  } catch (err) {
    res.status(500).send('INTERNAL ERROR' + err)
  }
})

module.exports = router
