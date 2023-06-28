const path = require('path');

module.exports = {
  entry: {
	'Welcome' : './javascript/Welcome.js',
	'Page2' : './javascript/Page2.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};