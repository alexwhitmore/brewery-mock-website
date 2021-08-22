const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@components': 'src/components/',
    '@config': 'src/config.js',
  })(config);

  return config;
};
