/* eslint-disable consistent-return */
const { users } = require('../../models');
const utils = require('../utils/token.utils');
const redis = require('../utils/redis.utils');

const makeUser = async (newUser) => {
  await users.create(newUser);
};

const validateUser = async (user) => {
  console.log(user);
  const foundUser = await users.findAll({

    attributes: ['id', 'username', 'password'],
    where: {
      username: user.username,
      password: user.password,

    },

  });
  console.log(Object.keys(foundUser), '**');
  if (Object.keys(foundUser).length !== 0) {
    const token = utils.createToken(user.username);
    console.log(token);
    redis.setKey(token, user.username);
    return token;
  }
};

const validateToken = async (token) => {
  const user = redis.getValue(token);
  return user;
};

module.exports = {
  makeUser,
  validateUser,
  validateToken,
};
