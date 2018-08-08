const config = require('../..') // require('webpack-config-avocado')
const merge = require('webpack-merge');

module.exports = merge(config, {
  output: {
    filename: 'js/my-custom-filename.js'
  },
});
