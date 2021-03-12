
const faker = require('faker')
const { factory } = require('factory-girl')
const { User } = require('../../src/models')

factory.define('User', User, {
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  role: 'user',
  is_active: true
})

module.exports = factory
