const mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "mydb"
});

con.connect((err) => {
    if(err) throw err;
    console.log('Connected!');

    var createT = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
    con.query(createT, (err, result) => {
        if(err) throw err;
        console.log('Table created!');
    });
});