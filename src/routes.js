const express = require('express')

const routes = express.Router()

const AuthController = require('./controllers/AuthController')

routes.get('/', (req, res) => {
  res.send('Hello World!')
})

routes.post('/auth', AuthController.store)

module.exports = routes
