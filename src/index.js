const express = require('express');
const env = require('dotenv');
const bodyParser = require('body-parser');
const { authRouter } = require('./routes/auth.router');
const { healthRouter } = require('./routes/health.route');

env.config();

const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 4000;

app.use('/health', healthRouter);
app.use('/authentication', authRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
