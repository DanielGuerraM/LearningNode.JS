const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://127.0.0.1:27017/mydb";

MongoClient.connect(url, (err, db) => {
    if(err) throw err;

    var dbo = db.db("mydb");

    dbo.collection("customers").find({}).toArray((err, result) =>{
        if(err) throw err;
        console.log(result);
        db.close();
    });
});