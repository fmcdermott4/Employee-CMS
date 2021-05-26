const {Department} = require('../models');

const departmentData = [
    {
        "name" : "Operations"
    },
    {
        "name" : "Logistics"
    }
];

const seedDepartment = () => Department.bulkCreate(departmentData);

module.exports = seedDepartment;