'use strict';

const webpack = require('webpack');
const path = require('path');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');

module.exports = {
	resolve: {
		extensions: ["", ".js", ".jsx"]
	},
	entry: {
		app: './src/js/app'
	},
	output: {
		path: __dirname + '/app/public/js',
		publicPath: '',
		filename: 'main.js',
	},
	watch: true,

	devtool: 'source-map',
	
	module: {
		preLoaders: [
			{
				//Eslint loader
				test: /\.(js|jsx)$/,
				loader: 'eslint-loader',
				include: [path.resolve(__dirname, "src/js/app")],
				exclude: [nodeModulesPath]
			},
		],
		loaders: [{
			test: /\.jsx?$/,
			exclude: [nodeModulesPath],
            loaders: ['babel', 'react-map-styles'],
		}]
	},

	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		})
	],
};