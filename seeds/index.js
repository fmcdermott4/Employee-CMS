const sequelize = require('../config/connection');
const Department = require('../models/Department.js');
const departmentData = require('./department-seeds.json');
const Employee = require('../models/Employee.js');
const employeeData = require('./employee-seeds.json');
const Role = require('../models/Role.js');
const roleData = require('./role-seeds.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await Department.bulkCreate(departmentData, {
        individualHooks: true,
        returning: true,
    });
    await Employee.bulkCreate(employeeData, {
        individualHooks: true,
        returning: true,
    });
    await Role.bulkCreate(roleData, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0);
};

seedDatabase();