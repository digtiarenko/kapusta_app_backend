const { Transaction } = require('../transactionModel');

const findTransactions = param => {
  const { id, type, date, skip, limit } = param;

  const result = Transaction.find(
    { owner: id, date, type },
    '-createdAt -updatedAt',
    {
      skip,
      limit: Number(limit),
    },
  ).populate('category', 'name');
  return result;
};

module.exports = findTransactions;
