const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://127.0.0.1:27017/mydb";

MongoClient.connect(url, (err, db) =>{
    if(err) throw err;

    var dbo = db.db("mydb");
    var query = { lastName: "Montoya"};
    var newValues = { $set: { name: "Mateo", lastName: "Montiel", adddress: "Carrera 80" } };

    dbo.collection("customers").updateOne(query, newValues, (err, res) =>{
        if(err) throw err;
        console.log("1 document updated!");
        db.close();
    });
});