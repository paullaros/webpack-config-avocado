# Webpack Config Avocado

An opinionated webpack config for El Mango projects

## Features

- webpack 4
- es8: by babel, presets & plugins
- sass support: with autoprefixer
- copy tasks for fonts & images
- eslint: with babel-eslint
- production & development (watch) tasks
- uglifyjs

## Basic Setup

```shell
npm install --save-dev webpack webpack-cli
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
