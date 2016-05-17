var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],  //input
  output: {
    path: __dirname,
    filename: './public/bundle.js'  //output file
  },
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery' //seach the expression and use the module
    })
  ],
  resolve: {  //extentions arrays. list of file extentions we want to process
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Weather: 'app/components/Weather.jsx',
      WeatherMessage: 'app/components/WeatherMessage.jsx',
      WeatherForm: 'app/components/WeatherForm.jsx',
      About: 'app/components/About.jsx',
      Examples: 'app/components/Examples.jsx',
      openWeatherMap: 'app/api/openWeatherMap.jsx',
      ErrorModal: 'app/components/ErrorModal.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {  // webpack does not know what to do, so it needs loaders.
    loaders: [
      {
        //
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']  // input -> output - compile our code in react to es2015
        },
        test: /\.jsx?$/,  // search for this files.. everything with .jsx at the end
        exclude: /(node_modules|bower_components )/ // don't look at this directories.
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map' // for debuging source maps
  // no lugar de debugar o bundle.js ele abre o modulo de origem sozinho
};
