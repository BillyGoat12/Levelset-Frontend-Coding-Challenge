const path = require("path");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "client", "src", "Index.jsx"),
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "client", "dist"),
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  devtool: "eval-source-map",
  resolve: {
    extensions: [".jsx", ".js"],
  },
};
