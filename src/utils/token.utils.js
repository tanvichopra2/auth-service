const { createHmac } = require('crypto');

const createToken = (userName) => {
  const secret = process.env.SECRET;
  const hash = createHmac('sha256', secret)
    .update('username')
    .digest('hex');
  console.log('/');
  return hash;
};
module.exports = {
  createToken,
};
