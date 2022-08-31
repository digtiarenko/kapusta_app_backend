const { Transaction } = require('../transactionModel');

const findTransactions = param => {
  const result = Transaction.find(param);
  return result;
};

module.exports = findTransactions;
