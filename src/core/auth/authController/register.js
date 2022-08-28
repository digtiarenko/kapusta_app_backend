const bcrypt = require('bcrypt');
const userService = require('../../user/userService');
const { createError } = require('../../../helpers');
const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await userService.getUserByEmail(email);
  if (user) {
    throw createError(409, `Email in use`);
  }
  const hashPassword = await bcrypt.hash(password, 10);

  const result = await userService.addUser({
    ...req.body,
    password: hashPassword,
  });

  res.status(201).json({
    user: {
      email: result.email,
      balance: result.balance,
    },
  });
};

module.exports = register;
