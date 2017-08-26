var express = require('express');
var router = express.Router();

/**
 * GET /users
 */
router.get('/', function(req, res, next) {
  var db = req.app.db.model.User;
});

/**
 * GET /users/:id
 */
router.get('/:id', function(req, res, next) {
  var db = req.app.db.model.User;
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
