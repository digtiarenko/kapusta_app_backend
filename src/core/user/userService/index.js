const addUser = require('./addUser');
const deleteUserById = require('./deleteUserById');
const getUserByEmail = require('./getUserByEmail');
const getUserById = require('./getUserById');
const updateUserTokenById = require('./updateUserTokenById');
const updateUserBalanceById = require('./updateUserBalanceById');
const updateUserCategoriesById = require('./updateUserCategoriesById');

module.exports = {
  addUser,
  deleteUserById,
  getUserByEmail,
  getUserById,
  updateUserTokenById,
  updateUserBalanceById,
  updateUserCategoriesById,
};
