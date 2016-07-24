const mongo = require(global.rootPath + '/core/mongodb.js');

module.exports = {
    auth: function (username, pass, callback) {
        mongo.connect((err, db) => {
            var cursor = db.collection('users').find({
                username: username,
                password: pass
            });

            cursor.nextObject((err, doc) => {
                if (doc != null) {
                    doc.password = null;
                    callback(doc);
                } else
                    callback(false);
            });
        });
    }

}
