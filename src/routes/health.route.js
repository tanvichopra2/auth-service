const express = require("express");
const healthRouter = express.Router();
const handlers = require('../handlers/health.handler');

healthRouter.get('/', handlers.getHealth);  

module.exports = {
    healthRouter
}