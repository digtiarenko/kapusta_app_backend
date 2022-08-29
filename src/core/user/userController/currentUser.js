const currentUser = (req, res) => {
  const { email, balance } = req.user;
  res.status(200).json({
    user: {
      email,
      balance,
    },
  });
};

module.exports = currentUser;
