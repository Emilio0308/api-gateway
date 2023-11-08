const { RateLimit, Proxy, Route } = require('../utils/routerClass');

// const PokeRutaFunction = () => {
//   const pokeLimiter = new RateLimit(1, 5);
//   const pokeProxy = new Proxy(
//     'https://pokeapi.co/api/v2/pokemon/',
//     true,
//     `^/pokemon`
//   );
//   const nProxyReq = (proxyReq, req, res) => {
//     const { id } = req.params;
//     if (id) {
//       proxyReq.path = `${id}`;
//     }
//   };
//   const pokeRuta = new Route(
//     '/pokemon/:id',
//     false,
//     false,
//     pokeLimiter,
//     pokeProxy,
//     nProxyReq
//   );

//   return pokeRuta;
// };

// const streamRouteGenerator = () => {
//   const limiter = new RateLimit(1, 50);
//   const proxy = new Proxy('http://localhost:5000/', true, `^/videollamada`,true);
//   const streamRoute = new Route('/videollamada', true, true, limiter, proxy);

//   return streamRoute
// };

// const premiunRouteGenerator2 = () => {
//   const proxy = new Proxy('https://www.google.com', true, `^/dolar`);
//   const ruta2 = new Route('/dolar', true, true, null, proxy);

//   return ruta2
// };

// const callRouteGenerator = () => {
//   const onProxyReq= (proxyReq, req, res) => {
//     console.log('Solicitud del cliente:', req.method, req.originalUrl, proxyReq.path);
//     console.log('Cabeceras de la solicitud:', req.headers);
//   }

//   const proxy = new Proxy('http://localhost:4000', false, `^/video-call`,true,onProxyReq);
//   const streamRoute = new Route('/', true, true, null, proxy);

//   return streamRoute
// };

// const ROUTES = [
//   callRouteGenerator(),
// ];

// module.exports = ROUTES;

const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const router = express.Router();


const createVideoCallProxy = createProxyMiddleware('https://call-service-uxn7.onrender.com',{
  target: 'https://call-service-uxn7.onrender.com',
  changeOrigin: true,
  pathRewrite: {
    '^/call-service/': '/socket.io/',
  },
  ws: true,
  logLevel: 'info',
});

router.use(createVideoCallProxy);

module.exports = router;

//ejemplo de ruta
// {
//   url: '/pokemon/:id',
//   auth: false,
//   creditCheck: false,
//   rateLimit: {
//     windowMs: 1 * 60 * 1000,
//     max: 5,
//   },
//   proxy: {
//     target: 'https://pokeapi.co/api/v2/pokemon/',
//     changeOrigin: true,
//     pathRewrite: {
//       [`^/pokemon`]: '',
//     },
//   },
//   nProxyReq: (proxyReq, req, res) => {
//     const { id } = req.params;
//     if (id) {
//       proxyReq.path = `${id}`;
//     }
//   },
// },
