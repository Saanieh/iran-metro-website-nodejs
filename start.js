const express = require('express');
const app = express();

require('./core/init-hbs.js')(app);

require('./router.js')(app);

console.log('Listening on port: 3000');
app.listen(3000);