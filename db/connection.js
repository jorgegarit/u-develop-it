const mysql = require('mysql2');

// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'election'
    },
    console.log('Connected to the election databse')
);

module.exports = db;