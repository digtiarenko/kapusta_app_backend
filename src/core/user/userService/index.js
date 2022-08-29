const addUser = require('./addUser');
const deleteUserById = require('./deleteUserById');
const getUserByEmail = require('./getUserByEmail');
const getUserById = require('./getUserById');
const updateUserTokenById = require('./updateUserTokenById');
const updateUserBalanceById = require('./updateUserBalanceById');

module.exports = {
  addUser,
  deleteUserById,
  getUserByEmail,
  getUserById,
  updateUserTokenById,
  updateUserBalanceById,
};
