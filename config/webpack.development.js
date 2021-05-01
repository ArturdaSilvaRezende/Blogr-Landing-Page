const miniCssExtractPlugin = require("mini-css-extract-plugin");
const common = require("./webpack.common");
const merge = require("webpack-merge");

const config = {
  mode: "development",
  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          miniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              importLoaders: 1,
              minimize: true,
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: "asset/resource",
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "assets/",
          publicPath: "assets/",
        },
      },

      {
        test: /\.(eot|svg|ttf|woff|woff2?)$/i,
        use: ["file-loader"],
      },
    ],
  },

  plugins: [
    new miniCssExtractPlugin({
      filename: "css/style.css",
    }),
  ],
};

module.exports = merge.smart(common, config);
