const { setupProxies } = require('../utils/proxy');
const videoCallRoutes = require('./videoCall.routes')


exports.generateVideoCallRoutes = (app) => {
    setupProxies(app,videoCallRoutes );
}


