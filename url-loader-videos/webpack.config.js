const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry: path.resolve(__dirname, "src/js/index.js"),
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/bundle-video.js",
    publicPath: "./dist/"
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|woff|eot|ttf|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 100000
            }
          }
        ]
      },
      {
        test: /\.(mp4|webm)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 100000,
              name: "videos/[name].[hash].[ext]"
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["es2015"]
          }
        }
      },
      {
        //test: que tipo de archivo voy a reconocer
        //use:  que tipo de loader se va a encargar del archivo
        test: /\.css$/,

        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [new ExtractTextPlugin("css/[name].css")]
};
