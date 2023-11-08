const { createProxyMiddleware } = require('http-proxy-middleware');

const setupProxies = (app, routes) => {
  routes.forEach((route) => {
    if (route.proxy.ws) {
      app.use(createProxyMiddleware(route.proxy));
    }else{
      app.use(route.url, createProxyMiddleware(route.proxy));
    }
  });
};





exports.setupProxies = setupProxies;
