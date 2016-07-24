module.exports = function (app) {
    app.use((req, res, next) => {
        if (!req.hbsData)
            req.hbsData = {};

        if (req.cookies.err) {
            req.hbsData.err = req.cookies.err;
            res.clearCookie('err');
        }
        if (req.cookies.msg) {
            req.hbsData.msg = req.cookies.msg;
            res.clearCookie('msg');
        }

        next();
    });
}
