module.exports = function (app, passport) {

    var LocalStrategy = require('passport-local').Strategy;
    const session = require('express-session');

    function getUser(username) {
        return {
            username: username,
            name: 'emran',
            age: 21
        };
    }

    passport.use(new LocalStrategy(
        function (username, password, done) {
            var User = require(global.rootPath + '/models/user.js');
            User.auth(username, password, (result) => {
                if (result) {
                    return done(null, result);
                } else
                    return done(null, false, 'username/password incorrect');
            });
        }
    ));

    app.use(session({
        secret: 'keyboard cat'
    }));
    app.use(passport.initialize());
    app.use(passport.session());

    app.use((req, res, next) => {
        if (typeof req.hbsData === "undefined")
            req.hbsData = {};

        if (req.user)
            req.hbsData.loggedIn = true;
        else
            req.hbsData.loggedIn = false;

        next();
    });

    passport.serializeUser((user, done) => {
        done(null, user.username);
    });

    passport.deserializeUser((username, done) => {
        done(null, getUser(username));
    });
}
