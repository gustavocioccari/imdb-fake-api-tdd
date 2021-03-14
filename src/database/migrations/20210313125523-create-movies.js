'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('movies', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      director: {
        type: Sequelize.STRING,
        allowNull: false
      },
      genre: {
        type: Sequelize.STRING,
        allowNull: false
      },
      actors: process.env.NODE_ENV === 'test'
        ? {
            type: Sequelize.STRING,
            allowNull: false
          }
        : {
            type: Sequelize.ARRAY(Sequelize.STRING),
            allowNull: false
          }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('movies')
  }
}
