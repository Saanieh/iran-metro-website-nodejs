module.exports = function (app, passport) {
    app.get('/', (req, res) => {

        var msg;
        if (req.cookies.msg) {
            msg = req.cookies.msg;
            res.clearCookie('msg');
        }

        res.render('index', {
            title: 'Iran Metro',
            msg: msg
        });
    });

    app.get('/about', (req, res) => {

        console.log(req.user);

        res.render('about', {
            title: 'About Us'
        });
    });

    app.get('/contact-us', (req, res) => {

        var err;
        if (req.cookies.err) {
            err = req.cookies.err;
            res.clearCookie('err');
        }

        res.render('contact-us', {
            title: 'Contact Us',
            err: err
        });
    });

    app.post('/contact-us', require('./controllers/contact-us-controller.js').post);

    app.get('/login', (req, res) => {
        var err;
        if (req.cookies.err) {
            err = req.cookies.err;
            res.clearCookie('err');
        } else if (req.user != null)
            return res.redirect('/admin');

        res.render('login', {
            title: 'Login',
            err: err
        });
    });

    app.get('/admin', (req, res) => {
        if (!req.user)
            return res.redirect('/login');

        const mongo = require(global.rootPath + '/core/mongodb.js');

        mongo.connect((err, db) => {
            var cursor = db.collection('comments').find();
            var posts = [];
            cursor.each((err, doc) => {
                if (doc != null)
                    posts.push(doc);
            });

            res.render('admin', {
                comments: posts
            });
        });
    });

    app.post('/login',
        passport.authenticate('local', {
            successRedirect: '/admin',
            failureRedirect: '/fail' //,
                //            failureFlash: true
        })
    );
}
