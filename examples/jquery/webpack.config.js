const config = require('../..') // require('webpack-config-avocado')
const webpack = require('webpack');
const merge = require('webpack-merge');

// Add jQuery support
module.exports = merge(config, {
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.$': 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default']
    })
  ],
  module: {
    rules: [
      {
        test: require.resolve('jquery'),
        use: [{
            loader: 'expose-loader',
            options: 'jQuery'
        },{
            loader: 'expose-loader',
            options: '$'
        }]
      }
    ]
  }
})
