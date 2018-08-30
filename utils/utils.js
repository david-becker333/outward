

var serverConfig = require('../config');
var fs = require("fs");
var path = require('path');


module.exports = {
    
    getView: function(resource) {
        var filepath = serverConfig.baseDirectory + resource;
        return filepath;
    },
    getSession: function(request) {
        return request.app.get('session');
    }
}



