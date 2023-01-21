const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://127.0.0.1:27017/mydb";

MongoClient.connect(url, (err, db) =>{
    if(err) throw err;

    var dbo = db.db("mydb");

    dbo.collection("orders").aggregate([
        {
            $lookup:
            {
                from: 'Products',
                localField: 'productId',
                foreignField: '_id',
                as: 'orderDetail'
            }
        }
    ]).toArray((err, res) =>{
        if(err) throw err;
        console.log(JSON.stringify(res));
        db.close();
    });
});