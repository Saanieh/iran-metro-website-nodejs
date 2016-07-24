module.exports = function (app, passport) {
    app.get('/', (req, res) => {

        var msg;
        if (req.cookies.msg) {
            msg = req.cookies.msg;
            res.clearCookie('msg');
        }

        req.hbsData.msg = msg;

        res.render('index', req.hbsData);
    });

    app.get('/about', (req, res) => {

        res.render('about', req.hbsData);
    });

    app.get('/contact-us', (req, res) => {

        var err;
        if (req.cookies.err) {
            err = req.cookies.err;
            res.clearCookie('err');
        }

        req.hbsData.err = err;

        res.render('contact-us', req.hbsData);
    });

    app.post('/contact-us', require(global.rootPath + '/controllers/contact-us-controller.js').post);

    app.get('/login', (req, res) => {
//        var err;
//        if (req.cookies.err) {
//            req.hbsData.err = req.cookies.err;
//            res.clearCookie('err');
//        } else if (req.user)
//            return res.redirect('/admin');
//
//        if (req.cookies.msg) {
//            req.hbsData.msg = req.cookies.msg;
//            res.clearCookie('msg');
//        }

        res.render('login', req.hbsData);
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

            req.hbsData.comments = posts;

            res.render('admin', req.hbsData);
        });
    });

    app.post('/login',
        passport.authenticate('local', {
            successRedirect: '/admin',
            failureRedirect: '/fail' //,
                //            failureFlash: true
        })
    );

    app.get('/fail', (req, res) => {
        res.cookie('msg', 'اطلاعات وارد شده اشتباه است');
        res.redirect('/login');
    })

    app.get('/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });
}
