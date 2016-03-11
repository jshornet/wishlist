'use strict';

var abstractParser = require('./abstractParser');

var parsersList = [ogParser];

module.exports = body => abstractParser(body, parsersList);

function ogParser($) {
	return $('meta[property="og:image"]').attr('content') ;
}