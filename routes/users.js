var express = require('express');
var router = express.Router();

/**
 * GET /users
 */
router.get('/', function(req, res, next) {
  var db = req.app.db.model.User;

  db.find({}, function(err, users) {
  	res.json(users);
  });
});

/**
 * GET /users/:id
 */
router.get('/:id', function(req, res, next) {
  var db = req.app.db.model.User;

  // See: http://expressjs.com/en/guide/routing.html
  var id = req.params.id;

  db.find({_id: id}, function(err, user) {
  	res.json(user);
  });  
});

/**
 * PUT /users/:id
 */
router.put('/:id', function(req, res, next) {
  var db = req.app.db.model.User;
});

/**
 * PUT /users/:id
 */
router.delete('/:id', function(req, res, next) {
  var db = req.app.db.model.User;
});

module.exports = router;
