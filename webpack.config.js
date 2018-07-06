const path = require("path");
module.exports = {
  entry: path.resolve(__dirname, "index.js"),
  mode: "development",
  output: {
    filename: "bundle.js"
  }
};
