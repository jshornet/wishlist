'use strict';

module.exports = {
	entry: {
		app: './src/app/app'
	},
	output: {
		path: __dirname + '/app',
		publicPath: '',
		filename: '[name].js',
		library: '[name]'
	},
	target: 'node',
	//watch: true,

	devtool: 'source-map',
	
	module: {
		loaders: [{
			test: /\.js?$/,
			exclude: /\/node_modules\//,
            loaders: ['babel'],
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