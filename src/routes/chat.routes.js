const express = require('express');
const {
  createProxyMiddleware,
  fixRequestBody,
} = require('http-proxy-middleware');
const router = express.Router();

const createChatProxy = createProxyMiddleware('https://chat-service-qa46.onrender.com/',{
  target: 'https://chat-service-qa46.onrender.com/',
  changeOrigin: true,
  pathRewrite: {
    '^/chatService/': '/my-custom-path/',
  },
  ws: true,
  logLevel: 'info',
});

router.use(createChatProxy);

module.exports = router;
