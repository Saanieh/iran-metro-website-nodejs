module.exports = function (app) {
    var PathTitler = require(global.rootPath + '/middlewares/path-titler.js');
    var pt = new PathTitler(app);
    pt.setPrefix('ایران مترو');
    pt.addTitle('/', 'صفحه اصلی');
    pt.addTitle('/login', 'ورود');
    pt.addTitle('/admin', 'پنل مدیریت');
    pt.addTitle('/about', 'درباره ما');
    pt.addTitle('/contact-us', 'ارتباط با ما');
}
