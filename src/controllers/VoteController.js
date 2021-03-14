const { Vote, User, Movie } = require('../models')

module.exports = {
  async store (req, res) {
    const userId = req.userId
    const { movieId } = req.params
    const { rating } = req.body
    try {
      const user = await User.findOne({ where: { id: userId } })
      if (user.role !== 'user') {
        return res.status(401).send('You cannot vote if you are an admin')
      }

      const hasAlreadyVoted = await Vote.findOne({ where: { movie_id: movieId, user_id: userId } })
      if (hasAlreadyVoted) {
        return res.status(401).send('You have already rated this movie')
      }

      const movie = await Movie.findOne({ where: { id: movieId } })
      if (!movie) {
        return res.status(400).send('There is no movie with this id in the list')
      }

      const vote = await Vote.create({
        user_id: userId,
        movie_id: movieId,
        rating
      })

      return res.status(201).json({
        user: user.name,
        movie: movie.name,
        rating: vote.rating
      })
    } catch (err) {
      return console.log(err)
    }
  }
}
