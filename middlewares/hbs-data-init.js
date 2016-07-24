/**
A middleware that instantiate an object (if not exists) to pass to other layers and get inflated in order to pass it to res.render() function.
**/
module.exports = function (app) {
    app.use((req, res, next) => {
        if (req.hbsData)
            req.hbsData = {};
        next();
    });
}
