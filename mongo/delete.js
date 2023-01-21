const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://127.0.0.1:27017/mydb";

MongoClient.connect(url, (err, db) =>{
    if(err) throw err;

    var dbo = db.db("mydb");
    var query = {lastName: 'Velasquez'};

    dbo.collection("customers").deleteOne(query, (err, obj) =>{
        if(err) throw err;
        console.log('1 document deleted');
        db.close();
    });
});