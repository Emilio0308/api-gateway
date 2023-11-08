const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const router = express.Router();

const createVideoCallProxy = createProxyMiddleware(
  'https://call-service-uxn7.onrender.com',
  {
    target: 'https://call-service-uxn7.onrender.com',
    changeOrigin: true,
    pathRewrite: {
      '^/call-service/': '/socket.io/',
    },
    ws: true,
    logLevel: 'info',
  }
);

router.use(createVideoCallProxy);

module.exports = router;
