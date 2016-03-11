'use strict';

var imageParser = require('./parsers/imageParser');
var titleParser = require('./parsers/titleParser');
var priceParser = require('./parsers/priceParser');

var Item = function () {
	var _image = '';
	var _title = '';
	var _price = 0;
	var _url = '';

	this.getImage = () => _image;

	this.setImage = value => {
		_image = value;
	};

	this.setURL = value => {
		_url = value;
	}

	this.getJSON = () => {
		return JSON.stringify({
			image: _image,
			title: _title,
			price: _price,
			url: _url
		});
	};

	this.parse = (body) => {
		_image = imageParser(body);
		_title = titleParser(body);
		_price = priceParser(body);
	};
};

module.exports = Item;