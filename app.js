var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var insertRouter = require('./routes/insert');
var usersRouter = require('./routes/users');

const { Pool, Client } = require("pg");

const pool = new Pool({
  user: "jxdxupfkbvognh",
  host: "ec2-54-217-204-34.eu-west-1.compute.amazonaws.com",
  database: "d660j81p5lk259",
  password: "5f63395a84787c80a71e10c87388edde813a282c97cb8868b7666385888711a2",
  port: "5432"
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/insert', insertRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
