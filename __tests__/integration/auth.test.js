/* eslint-disable no-undef */
const request = require('supertest')

const app = require('../../src/app')
const factory = require('../utils/factories')
const truncate = require('../utils/truncate')

describe('Authentication', () => {
  beforeEach(async () => {
    await truncate()
  })

  it(' should authenticate with valid creds', async () => {
    const user = await factory.create('User', {
      password: '12345'
    })
    const response = await request(app)
      .post('/auth')
      .send({
        email: user.email,
        password: '12345'
      })
    expect(response.status).toBe(200)
  })

  it('should not authenticate with invalid creds', async () => {
    const user = await factory.create('User', {
      password: '12345'
    })
    const response = await request(app)
      .post('/auth')
      .send({
        email: user.email,
        password: '123456'
      })
    expect(response.status).toBe(401)
  })

  it('should receive jwt when authenticated', async () => {
    const user = await factory.create('User', {
      password: '12345'
    })
    const response = await request(app)
      .post('/auth')
      .send({
        email: user.email,
        password: '12345'
      })
    expect(response.body).toHaveProperty('token')
  })
})
