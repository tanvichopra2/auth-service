const services = require('../services/auth.service');

const makeUser = async (req, res) => {
  const newUser = {
    username: req.body.username,
    password: req.body.password,
  };
  try {
    const savedUser = await services.makeUser(newUser);
    res.status(201).json({ message: 'successfully added user' });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const validateUser = async (req, res) => {
  const user = {
    username: req.body.username,
    password: req.body.password,
  };
  try {
    const token = await services.validateUser(user);
    res.header('token', token);
    res.status(200).json({ message: 'successfully logged in' });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const validateToken = async (req, res) => {
  try {
    const user = await services.validateToken(req.headers.token);
    res.json({
      user,
    }).status(200);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  makeUser,
  validateUser,
  validateToken,
};
