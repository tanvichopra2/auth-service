const express = require('express');

const authRouter = express.Router();
const handlers = require('../handlers/auth.handler');

authRouter.post('/login', handlers.validateUser);
authRouter.post('/sign-up', handlers.makeUser);
authRouter.get('/validateToken', handlers.validateToken);
module.exports = {
  authRouter,
};
