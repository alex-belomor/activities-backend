var MongoClient = require('mongodb').MongoClient;

var db;

exports.connect = function (url, done) {
    if (db) {
        return done();
    }

    MongoClient.connect(url, function (err, db) {
        if (err) {
            return done(err);
        }

        db = db.db('local');
        done();
    });
}

exports.get = function () {
    return db;
}
