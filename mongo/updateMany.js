const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://127.0.0.1:27017/mydb";

MongoClient.connect(url, (err, db) =>{
    if(err) throw err;

    var dbo = db.db("mydb");
    var query = { adddress: "Calle 10" };
    var newValues =  { $set:{ adddress: "Calle 12 C sur" } };

    dbo.collection("customers").updateMany(query, newValues, (err, res) =>{
        if(err) throw res;
        console.log(res + " document(s) uptated");
        db.close();
    });
});