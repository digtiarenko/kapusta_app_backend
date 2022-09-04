const { Transaction } = require('../transactionModel');
const { trimZeroInDate } = require('../../../helpers');

const getReportTransactionExpenses = async (_id, type) => {
  const result = await Transaction.aggregate([
    {
      $match: {
        owner: _id,
        type: type,
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
        _id: {
          year: { $year: '$date' },
          month: { $month: '$date' },
          type: '$type',
        },
        totalSum: { $sum: '$value' },
      },
    },

    {
      $project: {
        _id: 1,
        date: {
          $toString: {
            $dateFromParts: {
              year: '$_id.year',
              month: '$_id.month',
            },
          },
        },
        totalSum: 1,
      },
    },
    {
      $sort: {
        date: -1,
      },
    },
    { $limit: 6 },
  ]);

  const mapResult = result.map(item => {
    const newDate = item.date
      .substr(0, 7)
      .split('-')
      .map(i => trimZeroInDate(i))
      .join('-');
    return {
      _id: item._id.month,
      date: newDate,
      type: item._id.type,
      totalSum: item.totalSum,
    };
  });

  return mapResult;
};

module.exports = getReportTransactionExpenses;
