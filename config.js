
module.exports = {
    port: 9000,
    apiUriPath: '/api/v1',
    contentType: { 'content-type': 'application/json; charset=utf-8' },
    corsOptions: {
        "origin": "*",
        "methods": ['GET', 'PUT', 'POST', 'OPTIONS'],
        "preflightContinue": true,
        "optionsSuccessStatus": 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
    },
    baseDirectory: __dirname
}
