const express = require('express')

const routes = express.Router()

const UserController = require('./controllers/UserController')
const AuthController = require('./controllers/AuthController')

const authMiddleware = require('./middlewares/authenticator')

routes.get('/', (req, res) => {
  res.send('Hello World!')
})

routes.post('/user', UserController.store)

routes.post('/auth', AuthController.store)

routes.use(authMiddleware)
routes.patch('/user', UserController.update)
routes.patch('/user/deactivate', UserController.deactivate)

module.exports = routes
