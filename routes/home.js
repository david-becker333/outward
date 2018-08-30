
var express = require('express');
var cors = require('cors');
var router = express.Router();
var utils = require('../utils/utils');
var serverConfig = require('../config');

// add cors support
router.use(cors(serverConfig.corsOptions));

// /home
router.get('/', function (req, res) {
    var session = utils.getSession(req);
    res.render('home', {
        requestCount: session.requestCount
    });
})

router.get('/home', function (req, res) {
    var session = utils.getSession(req);
    res.render('home', {
        requestCount: session.requestCount
    });
})


module.exports = router
