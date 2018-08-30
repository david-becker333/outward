var Server = require('./Server');
var mathRoutes = require('./routes/math');
var gameRoutes = require('./routes/game');
var homeRoutes = require('./routes/home');

// Server instance
var server = new Server();

// define the routes
server.route('/', homeRoutes);
server.route('/', mathRoutes);
server.route('/', gameRoutes);


// start the server
server.start(function (config) {
    console.log("We have started our server on port " + config.port);
})
