class RateLimit {
  constructor(minute, maxAttempts) {
    this.windowMs = minute * 60 * 1000;
    this.max = maxAttempts;
  }
}

class Proxy {
  constructor(target, changeOrigin, pathRewrite, ws=false, onProxyReq,onProxyReqWs) {
    this.target = target;
    this.changeOrigin = changeOrigin;
    this.pathRewrite = {
      [pathRewrite]: '',
    };
    this.ws = ws;
    this.onProxyReq = onProxyReq
    this.onProxyReqWs= onProxyReqWs
  }
}

class Route {
  constructor(url, auth, creditCheck, rateLimit, proxy,) {
    this.url = `/apigateway/v1`+ url;
    this.auth = auth;
    this.creditCheck = creditCheck;
    this.rateLimit = { ...rateLimit };
    this.proxy = { ...proxy };
  }
}

module.exports = { Proxy, RateLimit, Route };
