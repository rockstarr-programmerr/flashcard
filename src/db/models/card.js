'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.CardDeck, {
        foreignKey: {
          allowNull: false
        },
        onDelete: 'CASCADE'
      })
    }
  };
  Card.init({
    front: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    back: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};
