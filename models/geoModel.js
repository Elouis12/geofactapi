let { db } = require("../config/db");

const retrieveHintsByCountryAndDifficulty = (req, resp) => {

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

            return resp.json(result);
        }
    } );
}


const retrieveAll = (req, resp) => {

    const sql = `
    
    SELECT 
        country, fact
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

module .exports = { retrieveHintsByCountryAndDifficulty }
