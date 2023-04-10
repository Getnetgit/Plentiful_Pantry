
const sequelize = require('../config/connection');
const { User, Grocery } = require('../models');

const userData = require('./userData.json');
const groceryData = require('./GroceryData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const grocery of groceryData) {
    await Grocery.create({
      ...grocery,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();