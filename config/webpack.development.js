const miniCssExtractPlugin = require("mini-css-extract-plugin");
const common = require("./webpack.common");
const merge = require("webpack-merge");

const config = {
  mode: "development",

  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [miniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
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
