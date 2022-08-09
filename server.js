const express = require("express");
const app = express();
const path = require("path");
const mysql = require('mysql');
const { db } = require("./config/db");
const dotEnv = require("dotenv");
dotEnv.config();

let cors = require('cors');
app.use( cors() );

app.use(express.static( "./public" ))

const hintRoutes = require("./routes/geoRoutes");


app.use('/countries', hintRoutes);

app.all( "*", (req, resp)=>{

    // '*' - works for all paths
    // resp.status(404).send('<h1>Resource not found </h1>');
    resp.status(404).sendFile( path.resolve( __dirname, './public/404.html') );


});


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

















