

## Setup Reatcjs with Tailwind and Webpack

# initial project
  npm init 

# install webpack cli
npm i webpack webpack-cli -D

# Create folder src and create index.js

# So, add on file package.json

"scripts": {
    "start": "webpack --mode development",
    "build": "webpack --mode production"
}


## Add react

# Install react and react-dom
npm i react react-dom react-router-dom -S


# Then install babel-core, babel-loader, babel-preset-env, and babel-preset-react as dependencies:

npm i babel-loader @babel/core @babel/preset-env @babel/preset-react @babel/cli -D


# setup webpack, in your project root, create file called webpack.config.js and add
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};

# setup babel, create in your project root .babelrc

{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}

# Then create index.html in your folder src

# we need to install html-webpack-plugin and use this in our webpack.config file.
npm i html-webpack-plugin -D

# Update our webpack.config file
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
  });
]
};


# So, React is succesfully setu, but need to set a dev server
npm i webpack-dev-server -D

# update your script inside  you package.json

## Add Tailwind CSS

# We need to install tailwind CSS and it's dependencies
npm install tailwindcss autoprefixer postcss-cli mini-css-extract-plugin postcss-loader --save-dev

# the, we need configure a tailwind config file, execute this command, this command will generate a tailwind.config.js file in the root of your project

./node_modules/.bin/tailwind init tailwind.config.js


# now, let's configure PostCSS in the root of your project, para que podamos usarlo para tranformar las directivas de tailwind en CSS puro. Creamos el archivo postcss.config.js

const tailwindcss = require('tailwindcss');
module.exports = {
    plugins: [
        tailwindcss('./tailwind.config.js'),
        require('autoprefixer'),
    ],
};


# Now, we need to tell webpack what CSS file  to watch and rebuild on every change, Inside your src/ directory create a style.css

@tailwind base; /* Preflight will be injected here */

@tailwind components;

@tailwind utilities;


/* Custom css */

# now, Sinse we will import css files into our React components, we need to install css-loader module to resolve them. We also need a style-loader to inject this into our DOM by adding a style tag into the head element of our HTML. 

npm i css-loader style-loader -D

# Then, update webpack.config.js

const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
       {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader", "postcss-loader",
          ],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css",
      chunkFilename: "styles.css"
    }),
    new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
  }),
]
};

# Now, we doing testing and add its into index.js file

import React from "react";
import ReactDOM from "react-dom";
import './styles.css';

const Index = () => {
  return <div className="bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
  <div className="sm:flex sm:items-center px-6 py-4">
    <img className="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" src="https://avatars.githubusercontent.com/u/771481?v=4" alt=""/>
    <div className="text-center sm:text-left sm:flex-grow">
      <div className="mb-4">
        <p className="text-xl leading-tight">Wilder Delgado</p>
        <p className="text-sm leading-tight text-grey-dark">Developer</p>
      </div>
      <div>
        <button className="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple hover:bg-purple hover:text-white">Message</button>
      </div>
    </div>
  </div>
</div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));


# npm run start


# crear string aleatorios 
1. npm install uuid


 







