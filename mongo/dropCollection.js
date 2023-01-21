const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://127.0.0.1:27017/mydb";

MongoClient.connect(url, (err, db) =>{
    if(err) throw err;

    var dbo = db.db("mydb");

    dbo.collection("customers").drop((err, delOK) =>{
        if(err) throw err;
        if(delOK) console.log("Collection deleted!");
        db.close();
    });
});