const addUser = require('./addUser');
const deleteUserById = require('./deleteUserById');
const getUserByEmail = require('./getUserByEmail');
const getUserById = require('./getUserById');
const updateUserById = require('./updateUserById');
const updateUserTokenById = require('./updateUserTokenById');
const updateUserBalanceById = require('./updateUserBalanceById');

module.exports = {
  addUser,
  deleteUserById,
  getUserByEmail,
  getUserById,
  updateUserById,
  updateUserTokenById,
  updateUserBalanceById,
};
