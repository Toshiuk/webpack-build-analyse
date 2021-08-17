const path = require("path");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
  mode: "production",
  entry: "./src/app.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      generateStatsFile: true,
      logLevel: "silent",
    }),
  ],
};
