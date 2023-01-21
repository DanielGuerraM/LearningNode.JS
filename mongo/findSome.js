const { Double } = require('mongodb');

const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://127.0.0.1:27017/mydb";

MongoClient.connect(url, (err, db) =>{
    if(err) throw err;

    var dbo = db.db("mydb");

    dbo.collection("customers").find({}, { projection: {_id: 0, name: 1, lastName: 1, adddress: 1}
    }).toArray((err, result) =>{
        if(err) throw err;
        console.log(result);
        db.close();
    });
});