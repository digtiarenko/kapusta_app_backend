const userService = require('../../user/userService');
const { createError } = require('../../../helpers');
const currentUser = async (req, res) => {
  const { email } = req.user;

  const user = await userService.getUserByEmail(email);
  if (!user) {
    throw createError(500, 'Server error');
  }
  res.status(200).json({
    user,
  });
};

module.exports = currentUser;
