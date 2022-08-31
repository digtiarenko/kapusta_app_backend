const { createError } = require('../../../helpers');

const transactionService = require('../transactionService');

const getTransactions = async (req, res) => {
  const { type } = req.params;

  const transactions = await transactionService.findTransactions({ type });
  if (transactions.length === 0) {
    throw createError(404);
  }

  res.status(200).json({
    transactions,
  });
};

module.exports = getTransactions;
