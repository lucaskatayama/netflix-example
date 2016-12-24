import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import BrowserSyncPlugin from 'browser-sync-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
import WebpackStrip from 'strip-loader';
import path from 'path';
import { version } from './package.json';



const BrowserSyncPluginConfig = new BrowserSyncPlugin({
  host: 'localhost',
  port: 3000,
  notify: false,
  proxy: 'http://localhost:8080/'
}, {
  reload: false
});
var PROD = process.env.NODE_ENV === 'production';

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + `/src/index.html`,
  filename: 'index.html',
  inject: 'body'
});

const DefinePlugin = new webpack.DefinePlugin({
  'process.env': {
    'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  }
});

const WebpackProviderConfig = new webpack.ProvidePlugin({'$': 'jquery', 'window.jQuery': 'jquery', 'jQuery': 'jquery', 'window.$': 'jquery', 'React': 'react'})


let plugins = [
  HTMLWebpackPluginConfig,
  BrowserSyncPluginConfig,
  DefinePlugin,
  WebpackProviderConfig,
  new FaviconsWebpackPlugin('assets/images/favicon.png'),
  new webpack.optimize.AggressiveMergingPlugin(),
];



let loaders = [
  {test: /.jsx?$/, loader: 'babel-loader', include: [
    path.resolve('src'),
    path.resolve('node_modules/preact-compat/src')
  ]},
  { test: /\.css$/, loader: 'style-loader!css-loader' },
  { test: /\.less$/, loader: "style-loader!css-loader!less-loader" },
  {test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader"] },
  { test: /\.json$/, loader: "json-loader" },
  { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
  { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
  { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
  {
   test: /.*\.(gif|png|jpe?g|svg)$/i,
   loaders: [
     'file-loader',
     {
       loader: 'image-webpack-loader',
       query: {
         progressive: true,
         optimizationLevel: 7,
         interlaced: false,
         pngquant: {
           quality: '65-90',
           speed: 4
         }
       }
     }
   ]
 }
];

let config = {
  entry: './src/main.jsx',
  output: { path: __dirname + '/docs', filename: PROD ? '[hash].js' : 'bundle.js' },
  devtool: 'source-map',
  devServer: {
    clientLogLevel: "info",
    historyApiFallback: true,
    inline: true
  },
  resolve: {
    extensions: [
      '.jsx', '.js'
    ],
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules')
    ],
    alias: {
      'jquery': __dirname + '/node_modules/jquery/dist/jquery.min.js',
      'jquery-ui': __dirname + '/node_modules/jquery-ui/ui/core.js'
    }
  },
  module: {
    rules: loaders
  },
  plugins: PROD ? [
    ...plugins,
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      comments: false,
      sourceMap: true,
      minimize: false
    })
  ] : plugins
}





export default config;
