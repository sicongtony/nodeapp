// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;

// let _db;

// const mongoConnect = callback => {
//   MongoClient.connect(
//     'mongodb+srv://tonyshen1:Ho3W8opKOXpFoXe3@cluster0.zpkp9du.mongodb.net/'
//   )
//     .then(client => {
//       console.log('Connected!');
//       _db = client.db('shop');
//       callback();
//     })
//     .catch(err => {
//       console.log(err);
//       throw err;
//     });
// };

// const getDb = () => {
//   if (_db) {
//     return _db;
//   }
//   throw 'No database found!';
// };

// exports.mongoConnect = mongoConnect;
// exports.getDb = getDb;
