const path = require('path');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');

module.exports = {
  mode:'none',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './'
  },
  module:{
  	rules:[{
  		test:/\.css$/,
  		use:[{
            loader: MiniCssExtractPlugin.loader,
        },'css-loader']
  	},{
	    test: /\.scss$/,
        use:[{
            loader: MiniCssExtractPlugin.loader,
        },{
            loader:"css-loader"
        },{
            loader:"sass-loader"
        }]
	},{
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
            loader:'file-loader',
            options: {
                publicPath:'../img/',
                outputPath: './img/'
            }
        }]
    }]
  },
  plugins: [
      new MiniCssExtractPlugin({
          filename: 'css/style.css',
      })
]
};