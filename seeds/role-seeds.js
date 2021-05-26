const {Role} = require("../models")

const roleData = [
    {
        "title" : "manager",
        "salary" : 100000,
        "department_id" : 1
    },
    {
        "title" : "specialist",
        "salary" : 100000,
        "department_id" : 2
    }
]

const seedRole = () => Role.bulkCreate(roleData);

module.exports = seedRole;