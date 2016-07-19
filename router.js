module.exports = function(app){
    app.get('/',(req,res) => {
        res.render('index', {title: 'Iran Metro'});
    });
    
    app.get('/about',(req,res) => {
        res.render('about', {title: 'About Us'});
    });
    
    app.get('/contact-us',(req,res) => {
        res.render('contact-us', {title: 'Contact Us'});
    });
    
//    require('./controllers/contact-us-controller.js').post({body: {name: "emran", email: "emran.bm@gmail.com", comment:"hello!"}}, null);
    
    app.post('/contact-us', require('./controllers/contact-us-controller.js').post);
}