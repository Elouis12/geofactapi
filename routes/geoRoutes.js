const express = require("express");
const router = express.Router();

// CONTROLLERS
const { getCountries,
        getCountriesAndCoords,
        getALL,
        getGeoHintsByCountry,
        getGeoHintsByCountryAndDifficulty,
        getGeoHintsByCountryAndDifficultyWithLimit,
        getGeoHintsByCountryWithLimit,
        play
} = require("../controllers/APIController");



router

    // SERVE JSON
    .get('/', getCountries)
    .get('/coords', getCountriesAndCoords)
    .get('/coords', getCountries)
    .get( '/all', getALL )
    .get( '/:country', getGeoHintsByCountry  )
    .get('/:country/dif/:difficulty', getGeoHintsByCountryAndDifficulty )
    .get('/:country/:difficulty/:limit', getGeoHintsByCountryAndDifficultyWithLimit )
    .get('/:country/:limit', getGeoHintsByCountryWithLimit )

    // SERVE HTML FILES

// router.get('/:country', getGeoHintsByCountry );
// router.get('/:country/:difficulty', getGeoHintsByCountry );


module.exports = router;
