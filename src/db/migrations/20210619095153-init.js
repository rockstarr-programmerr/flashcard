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
          front: {
            type: Sequelize.TEXT,
            allowNull: false
          },
          back: {
            type: Sequelize.TEXT,
            allowNull: false
          },
          cardDeckId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            field: 'cardDeckId',
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(transaction => {
      return Promise.all([
        queryInterface.dropTable('Cards', { transaction }),
        queryInterface.dropTable('CardDecks', { transaction })
      ])
    })
  }
};
