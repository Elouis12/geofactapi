let {
    retrieveHintsByCountryAndDifficulty

    } = require("../models/geoModel");

let  { db } = require("../config/db");


// GETS THE LIST OF COUNTRIES AVAILABLE
const getCountries = (req, resp) => {

    const sql = `
    
    SELECT 
        country
    FROM 
        geo_hints
    GROUP BY 
        country;
    `

    db.query( sql, (err, result) => {

        if( err ){ // if there's an error
            throw err;
        }else{ // if there's no error send us the result AKA query we just made

            result.length === 0 ?
                resp.json( { message : 'there are no countries available for the given parameter' } )
                :
                resp.json(result);
        }
    } )

}

// GET THE HINTS
const getALL = (req, resp) => {

    const sql = `
    
    SELECT 
        country, fact, difficulty
    FROM geo_hints;
    `
    db.query( sql, (err, result) => {

        if( err ){ // if there's an error
            throw err;
        }else{ // if there's no error send us the result AKA query we just made

            result.length === 0 ?
                resp.json( { message : 'there are no facts available for this country with the given parameters' } )
                :
                resp.json(result);
        }
    } )

}

// GET HINT BY COUNTRY
const getGeoHintsByCountry = (req, resp) => {


    const sql = `
    
    SELECT 
        fact
    FROM geo_hints
    WHERE country = LOWER('${req.params.country}');
    `

    db.query( sql, (err, result) => {

        if( err ){ // if there's an error
            throw err;
        }else{ // if there's no error send us the result AKA query we just made

            result.length === 0 ?
                resp.json( { message : 'there are no facts available for this country with the given parameters' } )
                :
                resp.json(result);
        }
    } )

}


// GET HINT BY COUNTRY AND DIFFICULTY
const getGeoHintsByCountryAndDifficulty = (req, resp) => {

    const sql = `
    
    SELECT 
        fact
    FROM geo_hints
    WHERE country = LOWER('${req.params.country}')
        AND difficulty = '${req.params.difficulty}';
    `
    db.query( sql, (err, result) => {

        if( err ){ // if there's an error
            throw err;
        }else{ // if there's no error send us the result AKA query we just made

            result.length === 0 ?
                resp.json( { message : 'there are no facts available for this country with the given parameters' } )
                :
                resp.json(result);
        }
    } );
    // resp.json(retrieveHintsByCountryAndDifficulty);

}


// GET HINT BY COUNTRY AND DIFFICULTY WITH LIMIT
const getGeoHintsByCountryAndDifficultyWithLimit = (req, resp) => {

    const sql = `
    
    SELECT 
        fact
    FROM geo_hints
    WHERE country = LOWER('${req.params.country}')
        AND difficulty = '${req.params.difficulty}'
    LIMIT ${req.params.limit};
    `
    db.query( sql, (err, result) => {

        if( err ){ // if there's an error
            throw err;
        }else{ // if there's no error send us the result AKA query we just made

            result.length === 0 ?
                resp.json( { message : 'there are no facts available for this country with the given parameters' } )
                :
                resp.json(result);
        }
    } );
    // resp.json(retrieveHintsByCountryAndDifficulty);

}

module.exports = {

                   getCountries,
                   getALL,
                   getGeoHintsByCountry,
                   getGeoHintsByCountryAndDifficulty,
                   getGeoHintsByCountryAndDifficultyWithLimit

                 }
