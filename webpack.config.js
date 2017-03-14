var path = require('path');

var config = {
	entry: path.resolve(__dirname, './main.js'),

	output:{
		path: path.resolve(__dirname, './'),
		filename: 'index.js'
	},

	devServer:{
		inline: true,
		port: 3000
	},

	module:{
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',

				query:{
					presets: ['es2015', 'react']
				}
			}
		]
	}
}

module.exports = function(env) {
  console.log('env', env);

  return config;
};