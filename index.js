var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Frankspass',
  database : 'employeetrackerDB'
});
connection.connect();
const cTable = require('console.table');
console.log("                                                                       \n                                                                       \nCCCCCCCCCCCCCMMMMMMMM               MMMMMMMM   SSSSSSSSSSSSSSS \nCCC::::::::::::CM:::::::M             M:::::::M SS:::::::::::::::S\nCC:::::::::::::::CM::::::::M           M::::::::MS:::::SSSSSS::::::S\nC:::::CCCCCCCC::::CM:::::::::M         M:::::::::MS:::::S     SSSSSSS\nC:::::C       CCCCCCM::::::::::M       M::::::::::MS:::::S            \nC:::::C              M:::::::::::M     M:::::::::::MS:::::S            \nC:::::C              M:::::::M::::M   M::::M:::::::M S::::SSSS         \nC:::::C              M::::::M M::::M M::::M M::::::M  SS::::::SSSSS    \nC:::::C              M::::::M  M::::M::::M  M::::::M    SSS::::::::SS  \nC:::::C              M::::::M   M:::::::M   M::::::M       SSSSSS::::S \nC:::::C              M::::::M    M:::::M    M::::::M            S:::::S\nC:::::C       CCCCCCM::::::M     MMMMM     M::::::M            S:::::S\nC:::::CCCCCCCC::::CM::::::M               M::::::MSSSSSSS     S:::::S\nCC:::::::::::::::CM::::::M               M::::::MS::::::SSSSSS:::::S\nCCC::::::::::::CM::::::M               M::::::MS:::::::::::::::SS \nCCCCCCCCCCCCCMMMMMMMM               MMMMMMMM SSSSSSSSSSSSSSS   \n                                                               ")
