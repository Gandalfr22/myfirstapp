const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


const indexRouter = require('./routes/index');
const blogRouter = require('./routes/users');
const postRouter = require('./routes/postId');


const app = express();
//db connection
  
const dbConnection = require('./helpers/connect.js') ();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/blog', blogRouter);
app.use('/',postRouter);



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
