const { RateLimit, Proxy, Route } = require('../utils/routerClass');
const {
  createProxyMiddleware,
  fixRequestBody,
} = require('http-proxy-middleware');
const rateLimit = require('express-rate-limit');
const limiter = new RateLimit(1, 100);
const express = require('express');
const router = express.Router();

// const loginRoute = createProxyMiddleware({
//   target: 'http://localhost:7000/api/v1/users',
//   changeOrigin: true,
//   pathRewrite: {
//     [`^/apigateway/v1/`]: '',
//   },
//   onProxyReq: fixRequestBody,
// });

const userProxy = createProxyMiddleware({
  target: 'https://user-service-aav2.onrender.com/api/v1/users',
  changeOrigin: true,
  pathRewrite: {
    [`^/apigateway/v1/`]: '',
  },
  onProxyReq: (proxyReq, req, res) => {
    fixRequestBody(proxyReq, req);
  },
});

router.use(rateLimit(limiter));
router.use('/create-user', userProxy);
router.use('/login', userProxy);
router.use('/update', userProxy);
router.use('/sendMessage', userProxy);
router.use('/getContacts', userProxy);

module.exports = router;


