const { createError } = require('../../../helpers');

const transactionService = require('../transactionService');

const getTransactions = async (req, res) => {
  const { type, date } = req.query;

  const transactions = await transactionService.findTransactions({
    type,
    date,
  });

  if (transactions.length === 0) {
    throw createError(404);
  }

  res.status(200).json({
    transactions,
  });
};

module.exports = getTransactions;
