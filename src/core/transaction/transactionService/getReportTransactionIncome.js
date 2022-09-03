const { Transaction } = require('../transactionModel');

const getReportTransactionIncome = _id => {
  const result = Transaction(_id).aggregate([
    {
      $match: {
        owner: _id,
        type: 'income',
      },
    },
    {
      $project: {
        _id: 1,
        value: 1,
        type: 1,
        date: {
          $dateFromString: { dateString: '$date' },
        },
      },
    },
    {
      $group: {
        _id: { month: { $month: '$date' } },
        totalSum: { $sum: '$value' },
      },
    },
    { $limit: 6 },
    {
      $project: {
        _id: 0,
        month: '$_id.month',
        totalSum: 1,
      },
    },
  ]);
  return result;
};

module.exports = getReportTransactionIncome;
