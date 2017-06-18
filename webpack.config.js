var webpack = require("webpack");
var path = require("path");

var DEV = path.resolve(__dirname,"dev");
var OUTPUT = path.resolve(__dirname,"output");
var config = {
	entry:DEV+"/main.js",
	output:{
		path:OUTPUT,
		filename:"bundle.js"
	},
	module:{
		loaders:[{
			test: /\.js|jsx$/,
			include:DEV,
			loader:"babel-loader",
			query: {presets: ['es2015','react']}
		},
 		]
	}
};
module.exports = config;