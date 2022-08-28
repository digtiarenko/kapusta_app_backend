const { User } = require('../userModel');

const updateUserTokenById = (userId, token) => {
  const result = User.findByIdAndUpdate(userId, token, { new: true });
  return result;
};

module.exports = updateUserTokenById;
