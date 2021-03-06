const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const app = express()

require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})

app.use(cors())
app.use(express.json())
app.use(routes)

module.exports = app
