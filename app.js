const express = require('express');
const path = require('path');
const app = express();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const staticFolder = path.resolve(__dirname, './public');
app.use(express.static(staticFolder));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
;

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
