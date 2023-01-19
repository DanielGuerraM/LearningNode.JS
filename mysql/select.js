const mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "mydb"
});

con.connect( (err) => {
    if(err) throw err;
    con.query("SELECT * FROM customers", (err, result, fields) => {
        if(err) throw err;
        console.log(result);
    });

    con.query("SELECT * FROM customers WHERE address = 'Calle 10'", (err, result) => {
        if(err) throw err;
        console.log(result);
    });

    con.query("SELECT * FROM customers WHERE address LIKE 'S%'", (err, result) => {
        if(err) throw err;
        console.log(result);
    });

    var adr = 'Lowstreet 4'
    var sql = "SELECT * FROM customers WHERE address = ?";
    con.query(sql, [adr], (arr, result) => {
        if(err) throw err;
        console.log(result);
    });
});