DROP DATABASE IF EXISTS employeetrackerDB;
CREATE DATABASE employeetrackerDB;

-- USE employeetrackerDB;

-- CREATE TABLE department(
--     id INT NOT NULL AUTO_INCREMENT,
--     name VARCHAR(100) NOT NULL,
--     PRIMARY KEY (id)
-- );
-- CREATE TABLE role(
--     id INT NOT NULL AUTO_INCREMENT,
--     title VARCHAR(30) NOT NULL,
--     salary decimal(10,2) NOT NULL,
--     department_id INT,
--     PRIMARY KEY (id)
-- );
-- CREATE TABLE employee(
--     id INT NOT NULL AUTO_INCREMENT,
--     first_name VARCHAR(30),
--     last_name VARCHAR(30),
--     role_id INT,
--     manager_id INT,
--     primary key (id)
-- )