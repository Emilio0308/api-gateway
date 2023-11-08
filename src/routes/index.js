const { setupProxies } = require('../utils/proxy');
const videoCallRoutes = require('./videoCall.routes')


exports.generateVideoCallRoutes = (app) => {
    setupProxies(app,videoCallRoutes );
}


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