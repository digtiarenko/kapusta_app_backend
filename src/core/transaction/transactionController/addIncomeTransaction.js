const transactionService = require('../transactionService');

const addIncomeTransaction = async (req, res) => {
  const { _id } = req.user;

  const result = await transactionService.createTransaction({
    ...req.body,
    owner: _id,
  });

  res
    .status(201)
    .json({ message: 'Transaction added successfully', data: { result } });
};

module.exports = addIncomeTransaction;
