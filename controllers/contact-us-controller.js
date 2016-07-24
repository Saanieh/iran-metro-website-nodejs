const fs = require('fs');
//const MongoClient = require('mongodb').MongoClient;

function render(res, err) {
    if (err) {
        res.cookie('err', err);
        res.redirect('/contact-us');
    } else {
        res.cookie('msg', 'comment-sent');
        res.redirect('/');
    }
}

function post(req, res) {
    var error = null;
    var comment = {
        name: req.body.name,
        email: req.body.email,
        comment: req.body.comment
    }

    const mongo = require(global.rootPath + '/core/mongodb.js');

    mongo.connect((err, db) => {
        if (err)
            return render(res, 'db connection failed.');
        db.collection('comments').insertOne(comment);

        render(res, null);
    });
}
module.exports = {
    post: post
}
