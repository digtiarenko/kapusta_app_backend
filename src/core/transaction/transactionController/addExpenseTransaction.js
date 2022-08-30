const transactionService = require('../transactionService');

const addExpenseTransaction = async (req, res) => {
  const { _id } = req.user;
  console.log('id', _id);

  const result = await transactionService.createExpense({
    ...req.body,
    owner: _id,
    type: 'expenses',
  });
  res
    .status(201)
    .json({ message: 'Expenses added successfully', data: { result } });
};

module.exports = addExpenseTransaction;
