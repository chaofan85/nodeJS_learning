// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return  console.log('Unable to connect to MongoDB server');
  }
  console.log(('Connected to MongoDB server'));
  const db = client.db('TodoApp');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5a88e1269c7bfe4dce9109f8')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (error) => {
  //   console.log('Unable to fetch todos', error);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (error) => {
  //   console.log('Unable to fetch todos', error);
  // });

  db.collection("Users").find({
    age: 64
  }).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (error) => {
    console.log('Unable to fetch data', error);
  });

  // client.close();
});
