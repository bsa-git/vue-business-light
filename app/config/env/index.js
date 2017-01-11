define([
  'env',
  'app/config/env/development',
  'app/config/env/production',
  'app/config/env/testing',
], function (env, development, production, testing) {

  var app_env = env && env.env ? env.env : 'development';

  var config = {
    development: development,
    production: production,
    testing: testing
  };

  return _.merge(config[app_env], env);
})
