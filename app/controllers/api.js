"use strict";

var express = require('express');
var router = express.Router();

router.use((req, res, next) => {
	res.type('json');
	next();
});
router.use('/parse', require('./parse'));
router.use('*', require('./default'));

module.exports = router;
