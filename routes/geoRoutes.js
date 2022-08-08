const express = require("express");
const router = express.Router();

// CONTROLLERS
const { getCountries,
    getSpecificCountry,
        getFacts,
        getFactsByCountry,
    getCountriesByLimit,
    getFactsByCountryLimit,
        getFlags
} = require("../controllers/APIController");



router

    // SERVE JSON
    .get('/', getCountries)
    .get( '/facts', getFacts )
    .get('/flags', getFlags ) // specifying the order is important
    // .get('/:limit', getCountriesByLimit)
    .get('/:country', getSpecificCountry)
    .get( '/facts/:country', getFactsByCountry )
    .get( '/facts/:country/:limit', getFactsByCountryLimit )

    // SERVE HTML FILES

// router.get('/:country', getGeoHintsByCountry );
// router.get('/:country/:difficulty', getGeoHintsByCountry );


module.exports = router;
