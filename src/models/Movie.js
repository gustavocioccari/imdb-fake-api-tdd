module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    name: DataTypes.STRING,
    director: DataTypes.STRING,
    genre: DataTypes.STRING,
    actors: DataTypes.ARRAY(DataTypes.STRING)
  })

  Movie.associate = (models) => {
    Movie.hasMany(models.Vote, {
      foreignKey: 'movie_id',
      as: 'votes'
    })
  }

  return Movie
}
