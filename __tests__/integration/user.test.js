/* eslint-disable no-undef */
const request = require('supertest')

const app = require('../../src/app')
const faker = require('faker')
const factory = require('../utils/factories')
const truncate = require('../utils/truncate')

describe('User', () => {
  beforeEach(async () => {
    await truncate()
  })

  it('should create new user', async () => {
    const user = {
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      role: 'user',
      is_active: true
    }
    const response = await request(app)
      .post('/user')
      .send(user)
    expect(response.status).toBe(201)
  })

  it('should update user details', async () => {
    const user = await factory.create('User')
    const response = await request(app)
      .patch('/user')
      .set('Authorization', `Bearer ${user.generateToken()}`)
      .send({
        name: 'Gustavo'
      })
    expect(response.body.userUpdated.name).toBe('Gustavo')
  })

  it('should deactivate user', async () => {
    const user = await factory.create('User')
    const response = await request(app)
      .patch('/user/deactivate')
      .set('Authorization', `Bearer ${user.generateToken()}`)
    expect(response.body.userUpdated.is_active).toBe(false)
  })
})
