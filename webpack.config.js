var path = require('path');

module.exports = {
	devtool: 'eval-source-map',
	entry: './app/app.js',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loaders: ['babel-loader'],
			include: path.join(__dirname, 'app')
		}]
	}
};