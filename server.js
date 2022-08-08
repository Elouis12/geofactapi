const express = require("express");
const app = express();
const mysql = require('mysql');
const { db } = require("./config/db");
const dotEnv = require("dotenv");
dotEnv.config();

let cors = require('cors');
app.use( cors() );


const hintRoutes = require("./routes/geoRoutes");
app.use('/countries', hintRoutes);



let port = process.env.PORT || 3000;







// connect to the server
app.listen(  port, ()=>{

    console.log('connected to the server')

    // connect to the db
/*    db./!*connect*!/getConnection(
        err => {
            if (err) {

                console.error(`ERROR connecting to db -> ${err}`);

            }else{
                console.log( 'connected to the db' );

            }
        }
        );*/
    // db;


} )

















