const sequelize = require('../config/connection');
const seedDepartment = require('./department-seeds');
const seedEmployee = require('./employee-seeds');
const seedRole = require('./role-seeds');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await seedDepartment();

    await seedRole();

    await seedEmployee();    

    process.exit(0);
};

seedDatabase();