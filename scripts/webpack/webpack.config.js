const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const postcssImport = require("postcss-import");
const postcssCssnext = require("postcss-cssnext");

const BASE_DIR = path.normalize(`${__dirname}/../..`);
const BUILD_DEST = path.normalize(`${BASE_DIR}/build/dashboard`);

const supportedBrowsers = "Electron >= 1.7";

const CONFIG = {
  entry: {
    dashboard: path.normalize(`${BASE_DIR}/src/dashboard/main.tsx`)
  },
  output: {
    filename: "dashboard.js",
    path: BUILD_DEST
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: ["file-loader"]
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.pcss$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              localIdentName: "[local]--[hash:base64:5]",
              modules: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: loader => [
                postcssImport({ root: loader.resourcePath }),
                postcssCssnext({ browsers: supportedBrowsers })
              ]
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".json", ".ts", ".tsx"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.normalize(`${BASE_DIR}/src/dashboard/templates/index.ejs`)
    })
  ]
};

module.exports = CONFIG;
