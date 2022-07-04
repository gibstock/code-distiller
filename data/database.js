require('dotenv').config()
const mysql = require('mysql')
const pool = mysql.createPool({
  connectionLimit: 100,
  host: process.env.HOST,
  user: process.env.MYSQL_USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
})

exports.pool = pool;
