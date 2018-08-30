

var express = require('express')
    , cors = require('cors')
    , app = express()
    , bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var utils = require('./utils/utils');
var serverConfig = require('./config');
var fs = require("fs");
var path = require('path');

/**
 * Server object module
 *
 * @public
 */
var Server = function () {

    if (!(this instanceof Server)) {
        return new Server();
    }

    var server = this;

    // configure middleware before loading routes
    configureMiddleware();


    /**
     * Adds a sub-router.
     *
     * @param {String} path
     * @param {Router} route
     * @return void
     */
    server.route = function (path, route) {
        app.use(path, route);
    }


    /**
     * Starts the express server.
     * @param {Number} callback
     * @return void
     */
    server.start = function (callback) {
        // start the server 
        app.listen(serverConfig.port, callback(serverConfig));
    }


    /**
     * "stop" - stops the server.
     * @return void
     */
    server.stop = function () {
        //TODO - implement 
    }

    function configureMiddleware() {
        // serve static assets
        app.use('/assets', express.static(path.join(__dirname, 'assets')))
        // configur express handlebars
        app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
        app.set('view engine', 'handlebars');

        // server configuration
        app.set('config', serverConfig);

        // initialize session scope
        var initialSession = {
            requestCount: 0,
            math: {
                problems: []
            },
            game: {

            }
        };
        app.set('session', initialSession);

        // parse application/x-www-form-urlencoded
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());


        var handleRequestTime = function (req, res, next) {
            var session = utils.getSession(req);
            session.requestCount++;
            next()
        }

        app.use(handleRequestTime)
    }

}

if (typeof module === "object" && module && typeof module.exports === "object") {
    module.exports = Server;
} else {
    window.Server = Server;

    if (typeof define === "function" && define.amd) {
        define("server", [], function () { return Server; });
    }
}
