const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://127.0.0.1:27017/mydb";

MongoClient.connect(url, (err, db) =>{
    if(err) throw err;
    
    var dbo = db.db("mydb");
    var myObj = {
        name: "Daniel",
        lastName: "Guerra",
        adddress: "Calle 12"
    };

    dbo.collection("customers").insertOne(myObj, (err, res) =>{
        if(err) throw err;
        console.log('1 document inserted');
        db.close();
    });
});