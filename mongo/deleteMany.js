const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://127.0.0.1:27017/mydb";

MongoClient.connect(url, (err, db) =>{
    if(err) throw err;

    var dbo = db.db("mydb");
    var query = {adddres: '/^H/'};

    dbo.collection("customers").deleteMany(query, (err, obj) =>{
        if(err) throw err;
        console.log(obj + " Document(s) deleted");
        db.close();
    });
});