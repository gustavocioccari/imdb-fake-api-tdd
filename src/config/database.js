require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})

module.exports = {
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  dialect: process.env.DB_DIALECT,
  storage: './__tests__/database.sqlite',
  logging: false,
  define: {
    underscored: true,
    underscoredAll: true,
    timestamps: false
  }
}
