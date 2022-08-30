const { Transaction } = require('../transactionModel');

const createExpense = transactionData => {
  const result = Transaction.create(transactionData);
  return result;
};

module.exports = createExpense;
