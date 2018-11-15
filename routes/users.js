'use strict';
var express = require('express');
var router = express.Router();
var usersController = require('../controllers/users');

/* GET users listing. */
router.get('/users', usersController.all);

router.post('/users/signup', function (req, res) {
    res.sendStatus(200);
});

module.exports = router;