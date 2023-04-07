const User = require('./User');
const Grocery= require('./Grocery');

User.hasMany(Grocery, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Grocery.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Grocery };
