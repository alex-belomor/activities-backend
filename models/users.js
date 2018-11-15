var db = require('../database/db')

exports.all = function (cb) {
  db.get().collection('users').find().toArray(function (err, docs) {
    cb(err, docs)
  })
}
