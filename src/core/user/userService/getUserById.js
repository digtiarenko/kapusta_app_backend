const { User } = require('../userModel');

const getUserById = async id => {
  const result = await User.findById(id, '-createdAt -updatedAt');
  return result;
};

module.exports = getUserById;
