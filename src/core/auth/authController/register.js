const bcrypt = require('bcrypt');
const userService = require('../../user/userService');
const roleService = require('../../role/roleService');
const { createError } = require('../../../helpers');

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await userService.getUserByEmail(email);
  if (user) {
    throw createError(409, `Email is already used`);
  }
  const hashPassword = await bcrypt.hash(
    password,
    Number(process.env.HASH_POWER),
  );
  const name = email.slice(0, email.indexOf('@'));
  const userRole = await roleService.getRoleByName('USER');
  const newUser = await userService.addUser({
    ...req.body,
    password: hashPassword,
    name,
    roles: [userRole.name],
  });

  res.status(201).json({
    user: {
      name: newUser.name,
      email: newUser.email,
      balance: newUser.balance,
    },
  });
};

module.exports = register;
