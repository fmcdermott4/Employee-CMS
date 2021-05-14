const sequelize = require('../config/connection');
const Department = require('../models/Department');
const departmentData = require('./department-seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Department.bulkCreate(departmentData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();