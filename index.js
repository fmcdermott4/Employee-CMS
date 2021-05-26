var mysql = require('mysql2');
var connection = mysql.createConnection({
  host     : 'localhost',
  port     : 3306,
  user     : 'root',
  password : 'Frankspass',
  database : 'employeetrackerDB'
});
connection.connect();
const cTable = require('console.table');
const inquirer = require('inquirer');
console.log("                                                                       \n                                                                       \nCCCCCCCCCCCCCMMMMMMMM               MMMMMMMM   SSSSSSSSSSSSSSS \nCCC::::::::::::CM:::::::M             M:::::::M SS:::::::::::::::S\nCC:::::::::::::::CM::::::::M           M::::::::MS:::::SSSSSS::::::S\nC:::::CCCCCCCC::::CM:::::::::M         M:::::::::MS:::::S     SSSSSSS\nC:::::C       CCCCCCM::::::::::M       M::::::::::MS:::::S            \nC:::::C              M:::::::::::M     M:::::::::::MS:::::S            \nC:::::C              M:::::::M::::M   M::::M:::::::M S::::SSSS         \nC:::::C              M::::::M M::::M M::::M M::::::M  SS::::::SSSSS    \nC:::::C              M::::::M  M::::M::::M  M::::::M    SSS::::::::SS  \nC:::::C              M::::::M   M:::::::M   M::::::M       SSSSSS::::S \nC:::::C              M::::::M    M:::::M    M::::::M            S:::::S\nC:::::C       CCCCCCM::::::M     MMMMM     M::::::M            S:::::S\nC:::::CCCCCCCC::::CM::::::M               M::::::MSSSSSSS     S:::::S\nCC:::::::::::::::CM::::::M               M::::::MS::::::SSSSSS:::::S\nCCC::::::::::::CM::::::M               M::::::MS:::::::::::::::SS \nCCCCCCCCCCCCCMMMMMMMM               MMMMMMMM SSSSSSSSSSSSSSS   \n                                                               ")
const menuOptions = [
    {
        type: 'list',
        name: 'doNext',
        message: 'What would you like to do?',
        choices: [
            'Add departments',            
            'Add roles',
            'Add employees',
            'View departments',
            'View roles',
            'View employees',
            'Update employee roles',
            'Exit'
        ]
    }
];
function menuOptionsPrompt() {
    inquirer.prompt(menuOptions).then((answer) => {
        switch(answer.doNext){
            case 'Add departments':
                console.log("Add departments");
                addDepartments();
                break;
            case 'Add roles':
                console.log("Add roles");
                addRoles();
                break;
            case 'Add employees':
                console.log("Add roles");
                addEmployees();
                break;
            case 'View departments':
                console.log("View departments");
                viewDepartments();
                break;
            case 'View roles':
                console.log("View roles");
                viewRoles();
                break;
            case 'View employees':
                console.log("View employees");
                viewEmployees();
                break;
            case 'Update employee roles':
                console.log("Update employee roles");
                updateEmployeeRoles();
                break;
            case 'Exit':
                console.clear();
                console.log("Goodbye!");
                process.exit(0);   
            default:
                console.log("Not an option");
                menuOptionsPrompt();
                break;
        }
    });
};
menuOptionsPrompt();
function viewDepartments() {
    
    connection.query('SELECT department_name FROM department;', (err,res) => {
        if (err) throw err;
        console.clear();
        console.table(res);
        menuOptionsPrompt();
    });
    
};

function viewRoles() {
    connection.query('SELECT role.id, role.title, role.salary, department.department_name FROM role, department WHERE role.department_id = department.id;', (err,res) =>{
        if (err) throw err;
        console.clear();
        console.table(res);
        menuOptionsPrompt();
    })
};

function viewEmployees() {
    connection.query('SELECT employee.id, employee.last_name, employee.first_name, role.title, role.salary, department.department_name FROM employee, role, department WHERE employee.role_id = role.id AND role.department_id = department.id',(err,res) => {
        if (err) throw err;
        console.clear();
        console.table(res);
        menuOptionsPrompt();
    })
    
};