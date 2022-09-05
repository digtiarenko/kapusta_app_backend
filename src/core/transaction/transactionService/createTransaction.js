const { Transaction } = require('../transactionModel');

const createTransaction = async transactionData => {
  const result = await (
    await Transaction.create(transactionData)
  ).populate('category', 'name default');
  return result;
};

module.exports = createTransaction;
