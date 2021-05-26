const sequelize = require('../config/connection');
const seedDepartment = require('./department-seeds');
const seedEmployee = require('./employee-seeds');
const seedRole = require('./role-seeds');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await seedRole();

    await seedEmployee();

    await seedDepartment();

    process.exit(0);
};

seedDatabase();