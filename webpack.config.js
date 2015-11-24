var path = require('path');

module.exports = {
	devtool: 'eval-source-map',
	entry: ['./app/index.js', './app/index.less'],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['babel-loader'],
				include: path.join(__dirname, 'app')
			},
			{
				test: /\.css$/,
				loader: 'style!css',
				include: path.join(__dirname, 'app')
			},
			{
				test: /\.less$/,
				loader: 'style!css!less',
				include: path.join(__dirname, 'app')
			}
		]
	}
};