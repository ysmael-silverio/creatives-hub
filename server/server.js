const express = require('express')
const path = require('path')

const homeRoutes = require('./routes/home')
const postRoutes = require('./routes/post')
const commentRoutes = require('./routes/comment')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/home', homeRoutes)
server.use('/api/v1/post', postRoutes)
server.use('/api/v1/comment', commentRoutes)

module.exports = server
