# Webpack Config Avocado

An opinionated webpack config for El Mango projects

## Features

- webpack 4
- webpack-serve
- es8: by babel, presets & plugins
- sass support: with autoprefixer
- copy tasks for fonts & images
- eslint: with babel-eslint
- production & development (watch) tasks
- uglifyjs

## Basic Setup

```shell
npm install --save-dev webpack
npm install --save-dev webpack-config-avocado
```

**webpack.config.js**
```js
module.exports = require('webpack-config-avocado')
```

**src/js/app.js**
```js
document.body.innerHTML = '<h1>Hello, mangoes!</h1>'
```

## Examples

- [Minimal](/examples/minimal/) - minimal setup
- [Advanced](/examples/advanced/) - webpack merge
