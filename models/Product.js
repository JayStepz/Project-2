const {Model : model, DataTypes : data_types} = require('sequelize')
const sequelize = require('../config')

class product extends model {}

product.init(
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
    description: {
      type: data_types.STRING,
      allowNull: true
    },
    price: {
      type: data_types.INTEGER,
      allowNull: false
    },
    image_url: {
      type: data_types.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'product'
  }
)