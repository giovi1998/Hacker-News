/*---------------- Plugin that allows us to use a template in the source 
code and optimize it for the version that will go online----------------*/
const HtmlWebpackPlugin = require("html-webpack-plugin");

//----------------Library that allows us to use Environment Variables during local development----------------
const Dotenv = require("dotenv-webpack");
//----------------NodeJS module that gives the possibility to interact with local files and folders----------------
const path = require("path");

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const stylesHandler = MiniCssExtractPlugin.loader;

//----------------To allow WebPack to use arguments the module must be a function (usually it is an object)----------------
module.exports = (env, argv) => {
  //----------------BASIC! We define the file to use based on the environment----------------
  const entryPath =
    argv.mode === "development" ? "./src/javascript/index_dev.js" : "./src/javascript/index.js";
  return {
    entry: {
      main: path.resolve(__dirname, entryPath),
    },
    output: {
      //----------------Once a package is created WebPack will put the resulting files in the build folder----------------
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "build"),
    },
    /*----------------Configuring a plugin, needed to speed up the development process see asterisks in the 
    next snippet **----------------*/
    devServer: {
      static: "./build",
      open: true,
    },
    module: {
      rules: [
          {
              test: /\.(js|jsx)$/i,
              loader: 'babel-loader',
          },
          {
              test: /\.css$/i,
              use: [stylesHandler,'css-loader'],
          },
          {
              test: /\.s[ac]ss$/i,
              use: [stylesHandler, 'css-loader', 'sass-loader'],
          },
      ],
  },
    plugins: [
      //----------------Plugin that takes a template and customizes it, completing it with scripts and any styles----------------
      new HtmlWebpackPlugin({
        title: "Hacker News",
        template: path.resolve(__dirname, "./src/index.html"),
        favicon: "./src/images//Favicon.jpg",
        
      }),
      new Dotenv(),
      new MiniCssExtractPlugin({

      }),
    ],
    
    experiments: {
      topLevelAwait: true
    },
    performance: { 
      hints: false 
    },
  };
};