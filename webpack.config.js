const { resolve } = require('path');
const webpack = require('webpack');

const { WebpackPluginServe } = require('webpack-plugin-serve');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsPathPlugin = require('tsconfig-paths-webpack-plugin')


const outputPath = resolve(__dirname, 'dist', 'app');
const Prism = require('./tools/prism.js')
const ENTRY_FILE = './src/index.tsx'
const HTML_TEMPLATE = "./src/index.html"


module.exports = {
  watch: true,
  mode: 'development',
  stats:"minimal",
  target: "web",
  devtool: 'source-map',

  entry: [ENTRY_FILE, 'webpack-plugin-serve/client'],
  output: {
    path: outputPath,
    publicPath: '/',
    filename: 'client.js'
  },
	resolve: {
    extensions: ['.jsx', '.js', '.json', '.mjs', '.ts', '.tsx'],
    alias: {
    'react': 'preact/compat',
    'react-dom': 'preact/compat',
    //'react-feather': 'preact-feather'
     },

    plugins:[
      new TsPathPlugin()
    ]
	},
  module: {
    rules: [
      {test: /\.[tj]sx?$/,use:[{loader: 'ts-loader', options: {transpileOnly: true}}],exclude: /node_modules/},
      {test: /\.css$/,use: ['style-loader','css-loader']},
      {test: /\.woff(\?.*)?$/,use: {loader: 'file-loader',options: {name: 'fonts/[name].[ext]',mimetype: 'application/font-woff'}}},
      {test: /\.woff2(\?.*)?$/,use: {loader: 'file-loader', options: {name: 'fonts/[name].[ext]',mimetype: 'application/font-woff2'}}},
      {test: /\.(otf|eot)(\?.*)?$/,use: {loader: 'file-loader',options: {name: 'fonts/[name].[ext]'}}},
      {test: /\.ttf(\?.*)?$/,use: { loader: 'file-loader',options: {name: 'fonts/[name].[ext]',mimetype: 'application/octet-stream'}}},
      {test: /\.svg(\?.*)?$/,use: {loader: 'file-loader',options: {name: 'images/[name].[ext]',mimetype: 'image/svg+xml'}}},
      {test: /\.(png|jpg)(\?.*)?$/,use: {loader: 'file-loader',options: {name: 'images/[name].[ext]'}}},

      {
        test: /\.md$/,
        use: [
          {
              loader: "html-loader"
          },
          {
            loader: "markdown-loader",
            options: {
              highlight(code, lang) {
                if (!lang) {
                  lang = 'jsx'
                }
                return Prism.highlight(code, Prism.languages[lang], lang);
              },
              smartypants: true,
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: HTML_TEMPLATE}),
    new webpack.DefinePlugin({'process.env': {NODE_ENV: JSON.stringify(process.env.NODE_ENV)}}),
    new WebpackPluginServe({
      hmr: true,
      host: "localhost",
      progress: false,
      historyFallback: true,
      static: [outputPath]
    })
  ]
};
