module.exports = function (app){
    const path = require('path');
    const exphbs = require('express-handlebars');
    
    const express = require('express');

    app.engine('.hbs', exphbs({  
      defaultLayout: 'main',
      extname: '.hbs',
      layoutsDir: path.join(__dirname, '../views/layouts')
    }));
    app.set('view engine', '.hbs');
    app.set('views', path.join(__dirname, '../views'));
    app.use(express.static(path.join(__dirname, '../views/assets')));
}