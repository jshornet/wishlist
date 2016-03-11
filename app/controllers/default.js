"use strict";

var express = require('express');
var request = require('request');
var responseUtil = require('./../helpers/responseUtil');

var router = express.Router();

router.all('/', (req, res) => {
	responseUtil.response404(res);
});

module.exports = router;