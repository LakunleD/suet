var dbClient = require('mongodb').MongoClient
    , ObjectID = require('mongodb').ObjectID
    , db = null
    ;

module.exports = {
  id: ObjectID,
  db: () => {
    return db;
  },
  connect: (fn) => {
    // Use connect method to connect to the Server
    dbClient.connect(process.env.DB_URL, (err, thisDb) => {
      db = thisDb;
      return fn(err);
    });
  }
}
