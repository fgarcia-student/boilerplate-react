const express = require('express');
const wpdmiddle = require('webpack-dev-middleware');
const wp = require('webpack');
const wpconfig = require('./webpack.config.js');

const app = express();
const compiler = wp(wpconfig);

app.use(express.static(__dirname + '/www'));

app.use(wpdmiddle(compiler, {
  hot : true,
  filename : 'bundle.js',
  publicPath : '/',
  stats : {
    colors : true,
  },
  historyApiFallback : true,
}));

app.listen(3000, () => {
  console.log(`listening on 3000`);
});
