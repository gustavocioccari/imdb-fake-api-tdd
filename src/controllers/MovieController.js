const { Movie } = require('../models')
const { User } = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const movie = await Movie.findAll({ where: req.query })

      return res.status(200).json({ movie })
    } catch (err) {
      return console.log(err)
    }
  },

  async store (req, res) {
    const userId = req.userId
    const { name, director, genre, actors } = req.body
    try {
      const user = await User.findOne({ where: { id: userId } })
      if (user.role !== 'admin') {
        return res.status(401).send('You cannot add movies if you are not an admin')
      }

      const movie = await Movie.create({
        name,
        director,
        genre,
        actors
      })

      return res.status(201).json({ movie })
    } catch (err) {
      return console.log(err)
    }
  },

  async detail (req, res) {
    const { id } = req.params
    try {
      const movie = await Movie.findByPk(id)

      if (!movie) {
        return res.status(400).send('The movie you want is not in the list')
      }

      return res.status(200).json({ movie })
    } catch (err) {
      return console.log(err)
    }
  }
}
