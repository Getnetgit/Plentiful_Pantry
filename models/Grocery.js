const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Grocery extends Model {}

Grocery.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    grocery_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity_min: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false,
    },

    quantity_avilable: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
  
    date_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    isShopingList:{
      type: DataTypes.VIRTUAL,
      get() {
        return this.quantity_avilable < this.quantity_min;
      }
    },
    isPantryList:{
      type: DataTypes.VIRTUAL,
      get() {
        return this.quantity_avilable >= this.quantity_min;
      }
    },
   
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'grocery',
  }
);

module.exports = Grocery;
