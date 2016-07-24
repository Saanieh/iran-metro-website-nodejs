const express = require('express');
const app = express();

var path = require('path');

global.rootPath = __dirname;

var passport = require('passport');

var cookieParser = require('cookie-parser');
app.use(cookieParser());

var bodyParser = require('body-parser')
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));


require('emran-hbs-config')(app, __dirname);

require('./core/auth.js')(app, passport);

require('./router.js')(app, passport);

// for compatibility with Heroku
var port = process.env.PORT || 3000;

console.log('Listening on port:' + port);
app.listen(port);
