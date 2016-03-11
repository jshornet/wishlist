'use strict';

var abstractParser = require('./abstractParser');

var parsersList = [itemPropParser];

module.exports = body => abstractParser(body, parsersList);

function itemPropParser($) {
	return $('[itemprop="price"]').text().replace(/[^0-9.]/g, '') ;
}
