const { User } = require('../userModel');

const updateUserBalanceById = async (userId, balance) => {
  const result = await User.findByIdAndUpdate(userId, balance, { new: true });
  return result;
};

module.exports = updateUserBalanceById;
