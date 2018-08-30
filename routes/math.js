
var express = require('express');
var cors = require('cors');
var router = express.Router();
var utils = require('../utils/utils');
var serverConfig = require('../config');
var path = require('path');

// add cors support
router.use(cors(serverConfig.corsOptions));

// /math
router.get('/math', function (req, res) {

    var session = utils.getSession(req);
    var problems = session.math.problems;

    res.render('get-math', {
        problems: problems
    });
})

// /math
router.post('/math', function (req, res) {

    var a, b, op, result;
    var body = req.body;
    a = Number(body.a);
    b = Number(body.b);
    op = body.operator

    switch (op) {
        case '+': result = (a + b); break;
        case '-': result = (a - b); break;
        case '*': result = (a * b); break;
        case '/': result = (a / b); break;
    }

    var session = utils.getSession(req);
    if (session) {
        session.math.problems.push({
            a: a, b: b, op: op, result: result
        });
    }
    res.redirect('/math');
})


module.exports = router
