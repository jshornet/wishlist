"use strict";

var express = require('express');
var request = require('request');
var responseUtil = require('./../helpers/responseUtil');
var Item = require('./../model/item');

var router = express.Router();

router.get('/', (req, res) => {
	let url = req.query.url;
	if (url) {
		request(url, (error, response, body) => {
			if (!error && response.statusCode == 200) {
				var item = new Item();
				item.setURL(url);
				item.parse(body);
				res.send(item.getJSON());
			} else {
				responseUtil.response404(res);
			}
		});
	} else {
		responseUtil.response404(res);
	}
})

module.exports = router;