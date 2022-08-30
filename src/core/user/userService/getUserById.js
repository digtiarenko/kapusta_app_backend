const { User } = require('../userModel');

const getUserById = async id => {
  const result = await User.findById(id);
  return result;
};

module.exports = getUserById;
