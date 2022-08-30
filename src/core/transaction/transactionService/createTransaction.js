const { Transaction } = require('../transactionModel');

const createTransaction = transactionData => {
  const result = Transaction.create(transactionData);
  return result;
};

module.exports = createTransaction;
