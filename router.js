module.exports = function(app){
    app.get('/',(req,res) => {
        
        var msg;
        if (req.cookies.msg){
            msg = req.cookies.msg; 
            res.clearCookie('msg');
        }
        
        res.render('index', {
            title: 'Iran Metro',
            msg: msg
        });
    });
    
    app.get('/about',(req,res) => {
        res.render('about', {title: 'About Us'});
    });
    
    app.get('/contact-us',(req,res) => {
        
        var err;
        if (req.cookies.err){
            err = req.cookies.err; 
            res.clearCookie('err');
        }
        
        res.render('contact-us', {
            title: 'Contact Us',
            err: err
        });
    });
    
    app.post('/contact-us', require('./controllers/contact-us-controller.js').post);
}