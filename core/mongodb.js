const MongoClient = require('mongodb').MongoClient;

module.exports = {
    connect: function (callback) {
        MongoClient.connect('mongodb://localhost:27017/iranmetro', (err, db) => {
            callback(err, db);
            try {
                db.close();
            } catch (e) {}
        });
    }
}
