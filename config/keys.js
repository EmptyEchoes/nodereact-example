//NODE_ENV is built-in heroku env variable
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
}
else {
  module.exports = require('./dev');
}
