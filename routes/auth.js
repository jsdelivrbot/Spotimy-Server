var express = require('express');
var request = require('request');

var router = express.Router();

router.post('/', function(req, res, next) {
    var authCode = req.body.code;
    var data = {
        code: authCode,
        grant_type: "authorization_code",
        redirect_uri: "chrisli://spotimy",
        client_id: process.env.SPOTIFY_CLIENT_ID,
        client_secret: process.env.SPOTIFY_CLIENT_SECRET
    };
    request.post('https://accounts.spotify.com/api/token', {
            form: data
        },
        function(err, response, body) {
            res.send(body);
        });
});

module.exports = router;
