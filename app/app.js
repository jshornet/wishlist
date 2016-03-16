"use strict";

var express = require('express');
var path = require("path");

const PORT = 3000;

let app = express();

console.log('App started.');

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});

app.use('/api', require('./controllers/api'));
app.use('/public', express.static(path.join(__dirname + '/public')));
app.all('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.use('*', require('./controllers/default'));