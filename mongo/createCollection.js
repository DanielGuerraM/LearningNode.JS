const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://127.0.0.1:27017/mydb";

// MongoClient.connect(url, (err, db)=>{
//     if(err) throw err;

//     var dbo = db.db("mydb");

//     dbo.createCollection("customers", (err, res) =>{
//         if(err) throw err;
//         console.log('Collection created')
//         db.close();
//     });
// });

MongoClient.connect(url, (err, db)=>{
    if(err) throw err;

    var dbo = db.db("mydb");

    dbo.createCollection("orders", (err, res) =>{
        if(err) throw err;
        console.log('Collection orders created')
        db.close();
    });
});

MongoClient.connect(url, (err, db)=>{
    if(err) throw err;

    var dbo = db.db("mydb");

    dbo.createCollection("Products", (err, res) =>{
        if(err) throw err;
        console.log('Collection products created')
        db.close();
    });
});