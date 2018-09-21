const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');
const Controller = require('./controllers/movieController');
const movies = require('./routes/movieRouter');
const db = require('./config/connection')
const app = express();

const PORT = process.env.PORT || 4000;

app.use(logger('dev'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname + 'public')));


app.get('/', Controller.index, (req, res) => {
res.render('index');
});


app.use('/movies', movies);

app.use('/movies/:id', (req, res) => {
  res.send( 'Hello');
});


app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
