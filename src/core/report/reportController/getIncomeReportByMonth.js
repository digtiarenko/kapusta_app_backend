const transactionService = require('../../transaction/transactionService');

const getIncomeReportByMonth = async (req, res) => {
  const { _id } = req.user;
  const result = await transactionService.getReportTransactionIncome({ _id });
  return result;
};

module.exports = getIncomeReportByMonth;
