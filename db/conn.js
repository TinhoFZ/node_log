const mysql = require('mysql2');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'node_log',
});

conn.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log('Conectado ao MySQL');
});

module.exports = conn;