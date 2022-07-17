const express = require("express");
const router = express.Router();

// CONTROLLERS
const { getCountries,
        getCountriesAndCoords,
        getALL,
        getGeoHintsByCountry,
        getGeoHintsByCountryAndDifficulty,
        getGeoHintsByCountryAndDifficultyWithLimit,
        play
} = require("../controllers/APIController");



router

    // SERVE JSON
    .get('/', getCountries)
    .get('/coords', getCountriesAndCoords)
    .get('/coords', getCountries)
    .get( '/all', getALL )
    .get( '/:country', getGeoHintsByCountry  )
    .get('/:country/:difficulty', getGeoHintsByCountryAndDifficulty )
    .get('/:country/:difficulty/:limit', getGeoHintsByCountryAndDifficultyWithLimit )

    // SERVE HTML FILES

// router.get('/:country', getGeoHintsByCountry );
// router.get('/:country/:difficulty', getGeoHintsByCountry );


module.exports = router;
