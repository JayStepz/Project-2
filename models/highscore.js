const {Model : model, DataTypes : data_types} = require('sequelize')
const sequelize = require('../config')

class highscore extends model {}

highscore.init(
  {
    id: {
      type: data_types.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: data_types.STRING,
      allowNull: false
    },
    score: {
      type: data_types.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'highscore'
  }
)

module.exports = highscore