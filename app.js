var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;
var person = require('./routes/person');
var auth = require('./routes/auth');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': true }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
else {
  app.use(logger('dev'));
  app.use(express.static(path.join(__dirname, 'build')));
}


var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/mern-secure', { 
  promiseLibrary: require('bluebird'), 
  useNewUrlParser: true  
})
.then(() =>  console.log('connection succesful'))
.catch((err) => console.error(err));

app.use('/api/person', person);
app.use('/api/auth', auth);


// TODO: Uncomment before final demonstration / push to production.

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

//Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

module.exports = app;
