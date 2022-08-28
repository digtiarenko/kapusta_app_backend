const { User } = require('../userModel');

const addUser = async id => {
  const result = await User.findByIdAndRemove(id);
  return result;
};

module.exports = addUser;
