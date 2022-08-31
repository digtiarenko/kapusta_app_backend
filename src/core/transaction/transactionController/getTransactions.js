const { createError } = require('../../../helpers');

const { Transaction } = require('../transactionModel');

const getTransactions = async (req, res) => {
  const { type } = req.params;
  const result = await Transaction.find({ type });
  if (!result) {
    throw createError(404);
  }
  res.status(200).json({ data: { result } });
};

module.exports = getTransactions;
