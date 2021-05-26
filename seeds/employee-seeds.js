const {Employee} = require('../models')

const employeeData = [
    {
        "first_name" : "Frank",
        "last_name" : "McDermott",
        "role_id" : 1
    },
    {
        "first_name" : "Heather",
        "last_name" : "DelGiorno",
        "role_id" : 2
    }
];

const seedEmployee = () => Employee.bulkCreate(employeeData);

module.exports = seedEmployee;