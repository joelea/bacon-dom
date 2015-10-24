var path = require("path");

module.exports = {
  entry: {
    app: "./src/main/bacon-dom.ts",
    tests: "./src/specs/bacon-dom-spec.ts"
  },
  output: {
    filename: path.join(__dirname, "build/[name].js"),
  },
  resolve: {
    extensions: ['', '.ts', '.webpack.js', '.web.js', '.js']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: "awesome-typescript-loader" },
    ],
  },
};
