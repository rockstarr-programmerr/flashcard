'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(transaction => {
      return Promise.all([

        queryInterface.createTable('CardDecks', {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          name: {
            type: Sequelize.STRING,
            allowNull: false
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
          }
        }, {
          transaction
        }),

        queryInterface.createTable('Cards', {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          name: {
            type: Sequelize.STRING,
            allowNull: false
          },
          cardDeckId: {
            type: Sequelize.INTEGER,
            references: {
              model: 'CardDecks',
              key: 'id',
              onDelete: 'cascade'
            }
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
          }
        }, {
          transaction
        })

      ])
    })
  },
  down: async (queryInterface, Sequelize) => {
    queryInterface.sequelize.transaction(transaction => {
      return Promise.all([
        queryInterface.dropTable('Cards', { transaction }),
        queryInterface.dropTable('CardDecks', { transaction })
      ])
    })
  }
};
