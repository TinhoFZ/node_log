const express = require('express');
const mysql2 = require('mysql2');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json());

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('layouts/home');
});


app.post('/teste/insertteste', (req, res) => {
    const email = req.body.email
    const senha = req.body.senha
    const sql = `INSERT INTO teste (email, senha) VALUES  ('${email}', '${senha}') `
    conn.query(sql, function(err){
        if (err) {
            console.log(err);
          }
          res.redirect('/teste')
    })
})

app.get('/teste', (req, res)=> {
  const sql= "SELECT * FROM teste"

  conn.query(sql, function  (err, data){
    if (err) {
      console.log(err);
     return
    }
    const teste =data;
    console.log(teste);

    res.render('layouts/teste', {teste} );
  });
});
const conn = mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'node_log',
});

conn.connect(function(err) {
  if (err) {
    console.log(err);
  }
  console.log('Conectado ao MySQL');
  app.listen(3000);
});