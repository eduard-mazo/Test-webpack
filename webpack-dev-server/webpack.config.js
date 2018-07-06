const path = require("path");
module.exports = {
  entry: path.resolve(__dirname, "index.js"),
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle-Style.js"
  },
  devServer: {
    port: 9000
  },
  module: {
    rules: [
      {
        //test: que tipo de archivo voy a reconocer
        //use:  que tipo de loader se va a encargar del archivo
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
