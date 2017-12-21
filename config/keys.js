
if (process.env.NODE_ENV === 'production') {
  const keys_prod = require('./prod'); 
  module.exports = keys_prod;
} else {
  const keys_dev = require('./dev'); 
  module.exports = keys_dev;
}