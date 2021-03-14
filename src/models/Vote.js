module.exports = (sequelize, DataTypes) => {
  const Vote = sequelize.define('Vote', {
    rating: DataTypes.INTEGER
  })

  Vote.associate = (models) => {
    Vote.belongsTo(models.Movie, {
      foreignKey: 'movie_id',
      as: 'movie'
    })
  }

  Vote.associate = (models) => {
    Vote.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user'
    })
  }

  return Vote
}
