const Redis = require('ioredis');

const redis = new Redis(6379, 'localhost');

redis.set('mykey', 'value');

const setKey = (key, value) => {
  redis.set(key, value, 'EX', process.env.TOKEN_EXPIRATION_TIME);
};

const getValue = (key) => redis.get(key);

module.exports = {
  setKey,
  getValue,

};
