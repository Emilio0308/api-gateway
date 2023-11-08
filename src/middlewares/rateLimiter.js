const rateLimit = require('express-rate-limit');

const setupRateLimit = (app, routes) => {
  routes.forEach((route) => {
    if (route.rateLimit && !route.proxy.ws) {
      app.use(route.url, rateLimit(route.rateLimit));
    }
  });
};

exports.setupRateLimit = setupRateLimit;
