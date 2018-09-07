//basic vars
const path = require('path')
const webpack = require('webpack')


//additional plugins
const Uglify = require('uglifyjs-webpack-plugin');


//module settings
let conf = {
	//базовый путь к проекту
	context: path.resolve(__dirname, 'src'),

	//Точки входа js
	entry: {
		app: [
			'./js/index.js'
		],
	},
	//Путь для собранных файлов
	output: {
			filename: 'bundle.js',
			path: path.resolve(__dirname, 'dist'),
			publicPath:'dist/'
	},
	// devServer config
	devServer: {
		contentBase: '.',
		overlay: true,
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				//exclude: '/node_modules/'
			}
		]
	},
	devtool: 'eval-sourcemap'
};

module.exports = (env, options) => {
	let production = options.mode === 'production';

	conf.devtool = production
									? 'source-map'
									: 'eval-sourcemap';
									
	return conf;
}