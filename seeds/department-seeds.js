const {Department} = require('../models');

const departmentData = [
    {
        "department_name" : "Operations"
    },
    {
        "department_name" : "Logistics"
    }
];

const seedDepartment = () => Department.bulkCreate(departmentData);

module.exports = seedDepartment;