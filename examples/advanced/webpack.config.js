const config = require('../..') // require('webpack-config-avocado')
const WebpackMerge = require('webpack-merge');

module.exports = WebpackMerge(config, {
  output: {
    filename: 'js/my-custom-filename.js'
  },
});
