const express = require("express");
const router = express.Router();

// CONTROLLERS
const { getCountries,
        getFromCountriesAndFlagsTable,
        getALL,
        getGeoHintsByCountry,
        getGeoHintsByCountryAndDifficulty,
        getGeoHintsByCountryAndDifficultyWithLimit,
        getGeoHintsByCountryWithLimit,
        getFlags
} = require("../controllers/APIController");



router

    // SERVE JSON
    .get('/', getCountries)
    .get('/countriesandflags', getFromCountriesAndFlagsTable )
    .get('/coords', getCountries )
    .get( '/all', getALL )
    .get( '/:country', getGeoHintsByCountry  )
    .get('/:country/flags', getFlags ) // specifying the order is important
    .get('/:country/dif/:difficulty', getGeoHintsByCountryAndDifficulty )
    .get('/:country/:difficulty/:limit', getGeoHintsByCountryAndDifficultyWithLimit )
    .get('/:country/:limit', getGeoHintsByCountryWithLimit )

    // SERVE HTML FILES

// router.get('/:country', getGeoHintsByCountry );
// router.get('/:country/:difficulty', getGeoHintsByCountry );


module.exports = router;
