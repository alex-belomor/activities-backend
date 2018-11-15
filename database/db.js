const {
  MongoClient,
  Db
} = require('mongodb')

let db

exports.connect = async function (url) {
  const database = await MongoClient.connect(url)
  db = database.db('local')
}
/**
  *
  * @returns {Db}
  */
exports.get = function () {
  return db
}
