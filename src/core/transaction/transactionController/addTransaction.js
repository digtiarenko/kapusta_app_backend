const transactionService = require('../transactionService');

const addExpenseTransaction = async (req, res) => {
  const { _id } = req.user;
  const transaction = await transactionService.createTransaction({
    ...req.body,
    owner: _id,
  });
  res.status(201).json({
    message: 'Transaction created successfully',
    transaction,
  });
};

module.exports = addExpenseTransaction;
