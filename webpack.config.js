const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  resolve: {
    extensions: [".ts", ".js", ".png"],
    alias: {
      "~": path.resolve(__dirname, "src"),
      "~assets": path.resolve(__dirname, "src/assets"),
    },
  },
  entry: "./src/main.ts",
  output: {
    // path: path.resolve(__dirname, 'dist'),
    // filename: 'main.js'
    publicPath: "/",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "static",
        },
      ],
    }),
  ],
  module: {
    noParse: /jquery|lodash/,
    rules: [
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.(png|je?pg|gif|svg|webp)$/,
        // use: 'file-loader',
        type: "asset/resource",
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
    ],
  },
  devServer: {
    port: 1234,
    host: "localhost",
    //HMR
    hot: true,
    historyApiFallback: true,
  },
};
