const path = require('path');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');
const CleanWebpackPlugin=require('clean-webpack-plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports = {
  mode:'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './'
  },
  devServer: {
    publicPath: '/'
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
    },{
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
            'file-loader'
        ]
    }]
  },
  plugins: [
      //在每次打包前清空生成的dist目录
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
          //无默认，添加require的模板
          template: './src/index.html',
          //设置js资源的引用位置，true表示位置在body标签的末尾引入js资源
          inject:true
      }),
      new MiniCssExtractPlugin({
          //选择打包的css文件名
          filename: 'css/style.css',
      })
]
};