var express = require('express');
var passport = require('passport');
var Strategy = require('passport-http-bearer').Strategy;
var db = require('./db');
var MongoClient = require('mongodb').MongoClient
var config = require('./config');

// Configure the Bearer strategy for use by Passport.
//
// The Bearer strategy requires a `verify` function which receives the
// credentials (`token`) contained in the request.  The function must invoke
// `cb` with a user object, which will be set at `req.user` in route handlers
// after authentication.
passport.use(new Strategy(
  function (token, cb) {
    db.users.findByToken(token, function (err, user) {
      if (err) { return cb(err); }
      if (!user) { return cb(null, false); }
      return cb(null, user);
    });
  }));


// Create a new Express application.
var app = express();

// Configure Express application.
app.use(require('morgan')('combined'));

console.log(config.connString);
var dbConn2 = config.connString;


// curl -v -H "Authorization: Bearer 123456789" http://127.0.0.1:3000/login
// curl -v http://127.0.0.1:3000/login?access_token=123456789
app.get('/login',
  passport.authenticate('bearer', { session: false }),
  function (req, res) {
    res.json({ username: req.user.username, email: req.user.emails[0].value });
  });

app.get('/people',
  function (req, res) {
    MongoClient.connect(dbConn2, function (err, db) {
      if (err) throw err

      db.db("directory").collection("person").find({}).toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
        db.close();
      });
    });
  });

app.post('/people',
  function (req, res) {
    MongoClient.connect(dbConn2, function (err, db) {
      if (err) throw err

      var testObj = { name: "derp" };
      db.db("directory").collection("person").insertOne(testObj, function (err, result) {
        if (err) throw err;
        res.json(result);
        db.close();
      });
    });
  });


app.listen(3000);
