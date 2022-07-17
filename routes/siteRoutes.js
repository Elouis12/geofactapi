const express = require("express");
const router = express.Router();

// CONTROLLERS
const {
    home,
    play
} = require("../controllers/siteController");



router

    // SERVE HTML FILES
    .get('/', home) // when user goes to site.com/
    // .get('/play', play) // when user goes to site.com/play

module.exports = router;
