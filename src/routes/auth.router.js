const express = require("express");
const authRouter = express.Router();
const handlers = require('../handlers/auth.handler');

authRouter.post('/', handlers.makeUser);  

module.exports = {
    authRouter
}