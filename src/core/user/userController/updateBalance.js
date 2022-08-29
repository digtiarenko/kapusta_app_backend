const userService = require('../../user/userService');

const updateBalance = async (req, res) => {
  const { _id: id } = req.user;
  const { balance } = req.body;

  const user = await userService.updateUserBalanceById(id, balance);

  res.status(200).json({
    balance: user.balance,
  });
};
module.exports = updateBalance;
