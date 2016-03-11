"use strict";

var express = require('express');

const PORT = 3000;

let app = express();

console.log('App started.');

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});

app.use('/api', require('./controllers/api'));
app.use('*', require('./controllers/default'));