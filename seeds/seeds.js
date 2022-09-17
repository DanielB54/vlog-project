const sequelize = require('../config/connection');
const { User, Vidpost } = require('../models');

const userData = require('./userData.json');
const vidData = require('./vidPostData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  await Vidpost.bulkCreate(vidData, {
    individualHooks: true,
    returning: true,
  });
  process.exit(0);
};




seedDatabase();
