
var express = require('express');
var cors = require('cors');
var router = express.Router();
var utils = require('../utils/utils');
var serverConfig = require('../config');

// add cors support
router.use(cors(serverConfig.corsOptions));

// /game
router.get('/game', function (req, res) {
    res.render('get-game');
})


module.exports = router
