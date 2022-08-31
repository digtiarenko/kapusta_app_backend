const { createError } = require('../../../helpers');

const transactionService = require('../transactionService');

const getTransactions = async (req, res) => {
  const { type } = req.params;

  const result = await transactionService.findTransactions({ type });
  if (result.length === 0) {
    throw createError(404);
  }

  res.status(200).json({ data: { result } });
};

module.exports = getTransactions;
