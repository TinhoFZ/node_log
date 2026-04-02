const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const methodOverride = require('method-override');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('hbs', exphbs.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(methodOverride('_method'));

const userRoutes = require('./routes/users');
app.use('/users', userRoutes);

const gameRoutes = require('./routes/games');
app.use('/users', gameRoutes);

app.get('/', (req, res) => {
  res.render('users/home');
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
});