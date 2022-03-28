const express = require("express");
const env = require('dotenv');
const { healthRouter } = require('./routes/health.route')
const {authRouter}= require('./routes/auth.router')
const bodyParser = require('body-parser');

env.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use('/health', healthRouter);
app.use('/login', authRouter);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});