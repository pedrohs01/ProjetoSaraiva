require("dotenv").config();
const mysql = require("mysql2");

const con = mysql.createConnection({
    host: process.env.HOST_DATABASE,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
})
module.exports = con;