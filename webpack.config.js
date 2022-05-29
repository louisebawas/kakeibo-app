const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.tsx',
	module: {
		rules: [
			{
				test: /\.(js|jsx|tsx|ts)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-react',
							'@babel/preset-env',
							'@babel/preset-typescript',
						],
						plugins: ['@babel/plugin-transform-runtime'],
					},
				},
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
				]
			}
		],
	},
	resolve: {
		extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
	},
	devServer: {
		port: 8000,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
};