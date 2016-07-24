module.exports = function (app) {
    var titles = {};
    var pre = '';

    this.addTitle = (path, title) => {
        titles[path] = title;
    }

    this.setPrefix = (prefix) => {
        pre = prefix;
    }

    app.use((req, res, next) => {
        if (!req.hbsData)
            req.hbsData = {};

        if (titles[req.path])
            req.hbsData.title = pre + ' - ' + titles[req.path];
        else
            try {
                req.hbsData.title = pre || req.path.substring(1);
            } catch (e) {}

        next();
    });
}
