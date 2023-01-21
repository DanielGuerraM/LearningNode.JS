const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://127.0.0.1:27017/mydb";

// MongoClient.connect(url, (err, db) =>{
//     if(err) throw err;

//     var dbo = db.db("mydb");
//     var myObjCustomers = [
//         { name: "Mateo", lastName: "Montoya", adddress: "Calle 50"},
//         { name: "Juan", lastName: "Herrera", adddress: "Calle 10"},
//         { name: "Camila", lastName: "Cara", adddress: "Calle 90"},
//         { name: "Sara", lastName: "Velasquez", adddress: "Calle 5"},
//         { name: "Cristian", lastName: "Rivera", adddress: "Calle 2"},
//         { name: "Danilo", lastName: "Cuartas", adddress: "Calle 5"},
//         { name: "Manuela", lastName: "Arango", adddress: "Calle 12"},
//         { name: "Luis", lastName: "Mesa", adddress: "Calle 10"},
//         { name: "Valentina", lastName: "Hernandez", adddress: "Calle 7"},
//         { name: "Estefania", lastName: "Mira", adddress: "Calle 33"},
//         { name: "Miguel", lastName: "Barrera", adddress: "Calle 70"},
//         { name: "Esteban", lastName: "Piedrahita", adddress: "Calle 80"},
//         { name: "Rebeca", lastName: "Martinez", adddress: "Calle 12"},
//         { name: "Emma", lastName: "Gil", adddress: "Calle 3"}
//     ];
    
//     dbo.collection("customers").insertMany(myObjCustomers, (err, res) => {
//         if(err) console.log('Failed');
//         console.log('Number of ducuments inserted is ' + res.insertedCount);
//         db.close();
//     });
// });

MongoClient.connect(url, (err, db) =>{
    if(err) throw err;

    var dbo = db.db("mydb");
    var myObjProducts = [
        { productId: 1, name: "T-shirt", color: "Red", size: "32"},
        { productId: 2, name: "T-shirt", color: "Blue", size: "28"},
        { productId: 3, name: "T-shirt", color: "Black", size: "30"},
        { productId: 4, name: "T-shirt", color: "Yellow", size: "38"},
        { productId: 5, name: "T-shirt", color: "Gray", size: "36"},
        { productId: 6, name: "T-shirt", color: "Green", size: "32"},
        { productId: 7, name: "T-shirt", color: "Orange", size: "28"},
        { productId: 8, name: "Shirt", color: "White", size: "40"},
        { productId: 9, name: "Shirt", color: "Blue", size: "32"},
        { productId: 10, name: "Shirt", color: "Black", size: "30"}
    ];
    
    dbo.collection("Products").insertMany(myObjProducts, (err, res) => {
        if(err) console.log('Failed');
        console.log('Number of ducuments inserted is ' + res.insertedCount);
        db.close();
    });
});

MongoClient.connect(url, (err, db) =>{
    if(err) throw err;

    var dbo = db.db("mydb");
    var myObjOrder = [
        { orderId: 101, productId: 1, status: 1},
        { orderId: 120, productId: 1, status: 0},
        { orderId: 111, productId: 1, status: 0},
        { orderId: 102, productId: 2, status: 0},
        { orderId: 112, productId: 2, status: 2},
        { orderId: 103, productId: 3, status: 3},
        { orderId: 113, productId: 3, status: 3},
        { orderId: 104, productId: 4, status: 3},
        { orderId: 114, productId: 4, status: 3},
        { orderId: 115, productId: 4, status: 1},
        { orderId: 105, productId: 5, status: 1},
        { orderId: 106, productId: 6, status: 1},
        { orderId: 107, productId: 7, status: 0},
        { orderId: 116, productId: 7, status: 0},
        { orderId: 108, productId: 8, status: 1},
        { orderId: 117, productId: 8, status: 1},
        { orderId: 109, productId: 9, status: 1},
        { orderId: 118, productId: 9, status: 0},
        { orderId: 110, productId: 10, status: 1},
        { orderId: 119, productId: 10, status: 1},
    ];
    
    dbo.collection("orders").insertMany(myObjOrder, (err, res) => {
        if(err) console.log('Failed');
        console.log('Number of ducuments inserted is ' + res.insertedCount);
        db.close();
    });
});