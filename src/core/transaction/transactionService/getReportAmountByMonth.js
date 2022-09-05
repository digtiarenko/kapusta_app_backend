const { Transaction } = require('../transactionModel');
const aggregations = require('./aggregations');

const getReportTransactionExpenses = async (_id, type) => {
  const result = await Transaction.aggregate(
    aggregations.reportAmountByMonth(_id, type),
  );

  const mapResult = result.map(item => {
    const indexEndDate = item.date.indexOf('T');
    const trimDate = item.date.substr(0, indexEndDate);
    return {
      _id: item._id.month,
      date: trimDate,
      type: item._id.type,
      totalSum: item.totalSum,
    };
  });

  return mapResult;
};

module.exports = getReportTransactionExpenses;
