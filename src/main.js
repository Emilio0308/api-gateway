const express = require('express');
const cors = require('cors');

const { setupLogging } = require('./utils/logging');
const usersRouter = require('./routes/users.routes');
const chatRouter = require('./routes/chat.routes');
const videoCallRoute = require('./routes/videoCall.routes');
const { startservices } = require('./utils/startServices');

const app = express();

app.use(express.json());
app.use(cors());

setupLogging(app);



app.use('/apigateway/v1/', usersRouter);
app.use('/chatService/', chatRouter);
app.use('/call-service/', videoCallRoute);



app.all('*', (req, res) => {
  return res.status(404).json({
    message: `Cant find ${req.originalUrl} on this apigateway!`,
  });
});

startservices()


module.exports = app;
