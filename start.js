const express = require('express');
const app = express();

var cookieParser = require('cookie-parser');
app.use(cookieParser());

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));


require('./core/init-hbs.js')(app);

require('./router.js')(app);

// for compatibility with Heroku
var port = process.env.PORT || 3000;

console.log('Listening on port:' + port);
app.listen(process.env.PORT || 3000);