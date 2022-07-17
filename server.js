const express = require("express");
const app = express();
const mysql = require('mysql');
const { db } = require("./config/db");
const dotEnv = require("dotenv");
dotEnv.config();

let cors = require('cors');
app.use( cors() );


const path = require('path');

const hintRoutes = require("./routes/geoRoutes");
app.use('/countries', hintRoutes);

const siteRoutes = require("./routes/siteRoutes");
app.use('/', siteRoutes);




let port = process.env.PORT || 5000;







// connect to the server
app.listen(  process.env.PORT || 5000, ()=>{

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

















