const { Transaction } = require('../transactionModel');

const findTransactions = param => {
  const { id, date, type, skip, limit } = param;
  if (type) {
    return Transaction.find(
      {
        owner: id,
        date,
        type,
      },
      '-createdAt -updatedAt',
      {
        skip,
        limit: Number(limit),
      },
    ).populate('category', 'name');
  } else {
    return Transaction.find(
      {
        owner: id,
        date,
      },
      '-createdAt -updatedAt',
      {
        skip,
        limit: Number(limit),
      },
    ).populate('category', 'name');
  }
};

module.exports = findTransactions;
