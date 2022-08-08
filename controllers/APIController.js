let {
    retrieveHintsByCountryAndDifficulty

} = require("../models/geoModel");

let  { db } = require("../config/db");


// COUNTRIES

const getSpecificCountry = (req, resp) => {

    const sql = `
    
            select
                country,
                capital,
                lat,
                lon,
                flag_image,
                flag_emoji
            from countries
            inner join flags
            on countries.id = flags.country_id
            WHERE country = lower('${req.params.country}')
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


const getCountries = (req, resp) => {

    const sql = `

            SELECT
                country,
                capital,
                lat,
                lon,
                flag_image,
                flag_emoji
            FROM countries
            INNER JOIN flags
            ON countries.id = flags.country_id

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
const getCountriesByLimit = (req, resp) => {

    const sql = `

            SELECT
                country,
                capital,
                lat,
                lon,
                flag_image,
                flag_emoji
            FROM countries
            INNER JOIN flags
            ON countries.id = flags.country_id
            LIMIT ${req.params.limit} 

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

// FACTS
const getFacts = (req, resp) => {

    const sql = `
            
        SELECT
            country, 
            fact,
            difficulty
        FROM countries
        INNER JOIN facts
        ON countries.id = facts.country_id
        ORDER BY country, difficulty
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

const getFactsByCountry = (req, resp) => {

    const sql = `
            
        SELECT
            country, 
            fact,
            difficulty
        FROM countries
        INNER JOIN facts
        ON countries.id = facts.country_id
        WHERE country = lower('${req.params.country}')
        ORDER BY country, difficulty
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

const getFactsByCountryLimit = (req, resp) => {

    const sql = `
            
        SELECT
            country, 
            fact,
            difficulty
        FROM countries
        INNER JOIN facts
        ON countries.id = facts.country_id
        WHERE country = lower('${req.params.country}')
        ORDER BY country, difficulty
        LIMIT ${req.params.limit} 

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


// FLAGS

const getFlags = ( req, resp ) => {

    const sql = `
    
            SELECT
                country,
                flag_image,
                flag_emoji
            FROM countries
            INNER JOIN flags
            ON countries.id = flags.country_id
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

module.exports = {

    getCountries,
    getSpecificCountry,
    getFacts,
    getFactsByCountry,
    getFlags,
    getCountriesByLimit,
    getFactsByCountryLimit

}
