/*
const mysql = require('mysql2');
const dotEnv = require("dotenv");
dotEnv.config();


const db = mysql./!*connect*!/createPool( {

    connectionLimit : 1,
/!*    host: 'us-cdbr-east-06.cleardb.net',
    user: 'b4b1d4f55fe3b1',
    password: '12bf9b36',
    database: 'heroku_345231a296ca44c'*!/


    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB

/!*    host: '127.0.0.1',
    user: 'ernesto',
    password: '1234567',
    database: 'geoapp'*!/

} );


module.exports = { db };



// mysql://b4b1d4f55fe3b1:12bf9b36@us-cdbr-east-06.cleardb.net/heroku_345231a296ca44c?reconnect=true
//        |              ||       ||                           ||                     |
//          DB USERNAME   password       host                            DB*/
