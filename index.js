var express = require('express');
var bodyParser = require("body-parser");

var home = require('./routes/default');
var auth = require('./routes/auth');

// used for .env variables.
require('dotenv').config();

var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use('/', home);
app.use('/auth', auth);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
