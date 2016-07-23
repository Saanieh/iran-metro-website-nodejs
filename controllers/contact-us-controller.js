const fs = require('fs');
const MongoClient = require('mongodb').MongoClient;

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

    // reads config for stuff like db password and ...
    //    fs.readFile(__dirname + '/../db-config.json', 'utf-8', (err, data) => {
    //        if (err) {
    //            error = "config read failed";
    //            render(res, error);
    //            return;
    //        }

    //        var dbConfig = JSON.parse(data);
    MongoClient.connect('mongodb://localhost:27017/iranmetro', (err, db) => {
        if (err)
            return render(res, 'db connection failed.');
        db.collection('comments').insertOne(comment);
        db.close();

        render(res, null);
    });
    //    });
}
module.exports = {
    post: post
}
