const express = require('express');
const env = require('dotenv');
const bodyParser = require('body-parser');
const { authRouter } = require('./routes/auth.router');

env.config();

const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 4000;

app.use('/authentication', authRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
