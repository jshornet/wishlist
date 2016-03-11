'use strict';

var cheerio = require('cheerio');

module.exports = (body, parsers) => {
	var $ = cheerio.load(body);
	var l = parsers.length;
	for (var i=0; i < l; i++){
		var result = parsers[i]($);
		if (result){
			return result;
		}
	}
}