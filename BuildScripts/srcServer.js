/*
  JS server
 */
import webpack from 'webPack';
//import start from start 'start';
import path from 'path';
import express from 'express';
import config from '../webpack.config.dev';


var path = require ('path');
var open = require('open')

const port = 52261;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler,
{
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/',function(req,res)
{
  res.sendfile(path.join(__dirname,'../src/index.html'));
});

app.listen(port,function(err)
{
  if(err)
  {
    console.log(err);
  }
    else
    {
      open('http://localhost:' + port);
    }
})

