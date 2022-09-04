const transactionService = require('../../transaction/transactionService');

const getExpenseReportByMonth = async (req, res) => {
  const { _id } = req.user;
  const expensesByMonth = await transactionService.getReportTransactionByMonth(
    _id,
    'expenses',
  );

  res.status(200).json({
    expensesByMonth,
  });
};

module.exports = getExpenseReportByMonth;
