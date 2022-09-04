const transactionService = require('../../transaction/transactionService');

const getIncomeReportByMonth = async (req, res) => {
  const { _id } = req.user;
  const incomeByMonth = await transactionService.getReportTransactionByMonth(
    _id,
    'income',
  );

  res.status(200).json({
    incomeByMonth,
  });
};

module.exports = getIncomeReportByMonth;
