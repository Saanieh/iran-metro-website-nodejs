const express = require('express');
const app = express();

require('./core/init-hbs.js')(app, express);

app.get('/',(req,res) => {
    res.render('index', null);
})

console.log('Listening on port: 3000');
app.listen(3000);