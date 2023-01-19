const url = require('url');
const adr = 'http://localhost:3000/index.html?year=2023&month=january';
const q = url.parse(adr, true);

console.log(q.host);
console.log(q.path);
console.log(q.search);

var qdata = q.query;
console.log(qdata.month);