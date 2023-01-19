const mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "mydb"
});

con.connect( (err) => {
    if(err) throw err;
    console.log('Connected!');

    var sql = "INSERT INTO customers (name, address) VALUES ('Mateo Montoya', 'Calle 10')"
    con.query(sql, (err, result) => {
        if(err) throw err;
        console.log('1 record inserted');
    });

    var manyCustomer = "INSERT INTO customers (name, address) VALUES ?";
    var values = [
        ['John', 'Highway 71'],
        ['Peter', 'Lowstreet 4'],
        ['Amy', 'Apple st 652'],
        ['Hannah', 'Mountain 21'],
        ['Michael', 'Valley 345'],
        ['Sandy', 'Ocean blvd 2'],
        ['Betty', 'Green Grass 1'],
        ['Richard', 'Sky st 331'],
        ['Susan', 'One way 98'],
        ['Vicky', 'Yellow Garden 2'],
        ['Ben', 'Park Lane 38'],
        ['William', 'Central st 954'],
        ['Chuck', 'Main Road 989'],
        ['Viola', 'Sideway 1633']
    ];

    con.query(manyCustomer, [values], (err, result) => {
        if(err) throw err;
        console.log("The number of record inserted: " + result.affectedRows);
    });
});
