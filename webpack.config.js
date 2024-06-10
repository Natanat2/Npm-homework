module.exports = {
    mode: 'development',
    entry: './src/index.js',
   devServer: {
     static: './dist',
   },
    output: {
      filename: 'main.js',
    },
  };
