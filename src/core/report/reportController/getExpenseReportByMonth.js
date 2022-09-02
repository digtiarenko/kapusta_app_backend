const { Transaction } = require('../../transaction/transactionModel');

const getExpenseReportByMonth = async (req, res) => {
  const { _id, ObjectId } = req.user;
  const result = await Transaction.aggregate([
    {
      $match: {
        owner: ObjectId(_id),
        type: 'expenses',
      },
    },
    {
      $group: {
        _id: { month: { $month: '$createdAt' } },
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
  res.json(result);
};

module.exports = getExpenseReportByMonth;
