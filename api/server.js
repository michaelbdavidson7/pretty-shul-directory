var express = require('express');
var passport = require('passport');
var Strategy = require('passport-http').DigestStrategy;
var bodyParser = require('body-parser');
var db = require('./db');
var MongoClient = require('mongodb').MongoClient
var config = require('./config');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data
var ObjectID = require('mongodb').ObjectID;
const bcrypt = require('bcrypt');


// Configure the Bearer strategy for use by Passport.
//
// The Bearer strategy requires a `verify` function which receives the
// credentials (`token`) contained in the request.  The function must invoke
// `cb` with a user object, which will be set at `req.user` in route handlers
// after authentication.
// passport.use(new Strategy(
//   function (token, cb) {
//     db.users.findByToken(token, function (err, user) {
//       if (err) { return cb(err); }
//       if (!user) { return cb(null, false); }
//       return cb(null, user);
//     });
//   }));

passport.use(new Strategy({ qop: 'auth' },
  function (username, cb) {
    MongoClient.connect(dbConn, function (err, db) {
      if (err) throw err
      db.db("directory").collection("login").findOne({ username: username }, function (err, user) {
        if (err) { return cb(err); }
        if (!user) { return cb(null, false); }
        return cb(null, user, user.password);
      })
    })
  }));



// Create a new Express application.
var app = express();

// Configure Express application.
app.use(require('morgan')('combined'));
app.use(bodyParser.json()); // for parsing application/json
var dbConn = config.connString;


// TODO: repository pattern

// curl -v -H "Authorization: Bearer 123456789" http://127.0.0.1:3000/login
// curl -v http://127.0.0.1:3000/login?access_token=123456789
app.post('/login',
  // passport.authenticate('bearer', { session: false }),
  function (req, res) {
    MongoClient.connect(dbConn, function (err, db) {
      if (err) throw err
      db.db("directory").collection("login").findOne({ username: req.body.username }, function (err, result) {
        if (err) throw err
        // TODO: else logic needed

        bcrypt.compare(req.body.password, result.password, function (err, bcryptResult) {
          res.json(bcryptResult);
          db.close();
        });
      });
    });
  });

app.post('/signup', function (req, res) {

  // create org, then admin account, then public account
  const saltRounds = 10;
  var newOrg = { ownerEmail: req.body.ownerEmail, name: req.body.orgName };

  MongoClient.connect(dbConn, function (err, db) {
    if (err) throw err

    var newOrgResponse = {};
    // TODO: need to check if exists
    db.db("directory").collection("org").insertOne(newOrg, function (err, result) {
      if (err) throw err;
      newOrgResponse = result.insertedId;

      // TODO: promises, abstraction



      bcrypt.hash(req.body.adminPassword, saltRounds, function (err, adminPasswordHash) {
        var newOrgAdmin = { username: req.body.adminUsername, password: adminPasswordHash, saltRoundsNum:saltRounds, orgId: newOrgResponse, isAdmin: true };

        db.db("directory").collection("login").insertOne(newOrgAdmin, function (err, result) {
          if (err) throw err;

          bcrypt.hash(req.body.userPassword, saltRounds, function (err, userPasswordHash) {
            var newOrgPublic = { username: req.body.publicUsername, password: userPasswordHash, saltRoundsNum:saltRounds, orgId: newOrgResponse, isAdmin: false };

            db.db("directory").collection("login").insertOne(newOrgPublic, function (err, result) {
              if (err) throw err;
              res.json({ pass: bcrypt.hash(req.body.adminPassword, bcrypt.genSaltSync(8)) });
              db.close();

            });
          });
        });
      });
    });
  });
});

app.get('/people',
passport.authenticate('digest', { session: false }),
  function (req, res) {
    MongoClient.connect(dbConn, function (err, db) {
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
    MongoClient.connect(dbConn, function (err, db) {
      if (err) throw err

      var testObj = { name: "derp" };
      db.db("directory").collection("person").insertOne(testObj, function (err, result) {
        if (err) throw err;
        res.json(result);
        db.close();
      });
    });
  });

app.put('/people', upload.array(),
  function (req, res) {
    MongoClient.connect(dbConn, function (err, db) {
      if (err) throw err

      console.log(req.body);
      var queryObj = { _id: ObjectID(req.body._id) };
      var changeObj = { $set: { name: req.body.name } };
      db.db("directory").collection("person").updateMany(queryObj, changeObj, function (err, result) {
        if (err) throw err;
        res.json(result);
        db.close();
      });
    });
  });

app.delete('/people',
  function (req, res) {
    MongoClient.connect(dbConn, function (err, db) {
      if (err) throw err

      idObj = { _id: ObjectID(req.body._id) }
      db.db("directory").collection("person").deleteOne(idObj, function (err, result) {
        if (err) throw err;
        res.json(result);
        db.close();
      });
    });
  });


app.listen(3000);
