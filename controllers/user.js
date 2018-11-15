var Users = require('../models/users');

exports.all = function (req, res) {
    Users.all(function (err, docs) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }

        res.send(docs);
    })
}
