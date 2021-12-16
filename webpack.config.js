const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//const CleanWebPackPlugin = require('clean-webpack-plugin');
// hacemos el require del plugin
const CopyWebpackPlugin = require('copy-webpack-plugin');
// modulo path de node, me permite concatenar directorios independientemente de Sistema Operativo usemos
const path = require('path');

const PATHS = {
  react: path.join(__dirname, 'node_modules/react/dist/react.min.js'),
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, './dist')
};

module.exports = {
  // Rules of how webpack will take our files, complie & bundle them for the browser 
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'file-loader',
          //options: {
          //  name: '[name].[ext]',
          //  outputPath: '/static/images/'
          //},
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader", "postcss-loader",
        ],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },

    ]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        // debemos pasar rutas absolutas y para no estar concatenando
        // path.resolve me da la ruta abosluta uniendo estos 2 subdirectorios
        // { from: 'public/assets/images/', 
        //   to: 'assets/images/',
        // }         
        {
          from: path.resolve(__dirname, 'public/assets/images/'),
          to: path.resolve(__dirname, 'dist/assets/images/'),
        }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css",
      chunkFilename: "styles.css"
    }),
    //new CopyWebpackPlugin([
    // {
    //     from: 'src/assets/images/**/*.jpg',
    //     to: path.join(__dirname, 'dist'),
    // }
    //])    ,     
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),


  ]
};