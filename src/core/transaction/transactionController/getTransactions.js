const transactionService = require('../transactionService');

const getTransactions = async (req, res) => {
  const { type, date } = req.params;
  const { page = 1, limit = 9 } = req.query;
  const { id } = req.user;
  const skip = (page - 1) * limit;

  const transactions = await transactionService.findTransactions({
    id,
    type,
    date,
    skip,
    limit,
  });

  res.status(200).json({
    transactions,
  });
};

module.exports = getTransactions;
