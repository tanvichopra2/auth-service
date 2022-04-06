const getHealth = (req, res) => {
  res.json({
    message: 'server says hello!',
  });
};

module.exports = {
  getHealth,
};
