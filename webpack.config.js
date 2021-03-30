const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./src/js/index.js",

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "js/bundle.js",
  },

  devtool: false,
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [miniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: "asset/resource",
        loader: "file-loader",
        options: { name: "assets/[name].[ext]" },
      },

      {
        test: /\.(eot|svg|ttf|woff|woff2?)$/i,
        use: ["file-loader"],
      },
    ],
  },

  plugins: [
    new htmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
    new miniCssExtractPlugin({
      filename: "css/style.css",
    }),
    new webpack.SourceMapDevToolPlugin({}),
  ],
};
