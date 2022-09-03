const transactionService = require('../../transaction/transactionService');

const getExpenseReportByMonth = async (req, res) => {
  const { _id } = req.user;
  const result = await transactionService.getReportTransactionExpenses({ _id });
  return result;
};

module.exports = getExpenseReportByMonth;
