const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  mode: "development",
  entry: {
    main: "./src/app.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./dist"),
    assetModuleFilename: 'images/[hash][ext][query]'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource'
      },
    ]
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: () => `Build Date : ${new Date().toLocaleString()}`
    }),
    new webpack.DefinePlugin({
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      templateParameters: {
        env: process.env.NODE_ENV === "development" ? "개발" : "배포"
      },
      minify: {
        removeComments: true, // 주석 제거,
      },
      hash: true, // 정적 파일을 불러올때 쿼리문자열에 웹팩 해쉬값을 추가한다
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: `[name].css` })
  ]
};
