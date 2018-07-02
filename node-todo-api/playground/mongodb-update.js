// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');


    // findOneAndUpdate
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b35014c2b2a97f7b212e1dc')
    }, {
        $set:{
            name: 'Jimmy Hughes'
        },
        $inc:{
            age: 1
        }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });


    // client.close();
});