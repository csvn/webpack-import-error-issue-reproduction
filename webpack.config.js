const { join } = require('path');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  resolve: {
    mainFields: ['es2015', 'module', 'main']
  },
  devServer: {
    contentBase: [join(__dirname, 'public'), join(__dirname, 'node_modules')]
  }
};
