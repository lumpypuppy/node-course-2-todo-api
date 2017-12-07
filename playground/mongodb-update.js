//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID('5a283a966db2f9bd3009ef19')
// }, {
//     $set: {
//       completed: true
//     }
//   }, {
//     returnOriginal: false
//   }).then((result)=>{
//     console.log(result);
//   });


db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('5a21b575f6342a340c4472de')
}, {
    $set: {
      name: 'Larry David'
    }, $inc: { age: 1
    }
  }, {
    returnOriginal: false
  }).then((result)=>{
    console.log(result);
  });


//  db.close();
});
