const express = require("express");
const router = express.Router();

// CONTROLLERS
const { getCountries,
        getALL,
        getGeoHintsByCountry,
        getGeoHintsByCountryAndDifficulty,
        getGeoHintsByCountryAndDifficultyWithLimit
} = require("../controllers/APIController");



router
    .get('/', getCountries)
    .get( '/all', getALL )
    .get( '/:country', getGeoHintsByCountry  )
    .get('/:country/:difficulty', getGeoHintsByCountryAndDifficulty )
    .get('/:country/:difficulty/:limit', getGeoHintsByCountryAndDifficultyWithLimit );


// router.get('/:country', getGeoHintsByCountry );
// router.get('/:country/:difficulty', getGeoHintsByCountry );


module.exports = router;
