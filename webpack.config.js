const path = require('path')
const VueLoaderPlugin = require('vue-loader//lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const EslintWebpackPlugin = require('eslint-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    // 启动gzip压缩，提高效率
    compress: true,
    // 指定端口号:5000
    port: 8000
    // 启动后是否直接打开默认浏览器
    // open: true
  },
  // 设置相对路径
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              }
            }
          },
          {
            loader: path.resolve(__dirname, './build/md-loader/index.js')
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new EslintWebpackPlugin(), // eslint代码规范插件
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src/assets'), to: path.resolve(__dirname, 'dist/assets') }
      ]
    })
  ]
}
