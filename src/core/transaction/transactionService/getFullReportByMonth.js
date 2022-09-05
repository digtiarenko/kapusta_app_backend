const { Transaction } = require('../transactionModel');
const aggregations = require('./aggregations');

const getFullReportByMonth = async (_id, year, month) => {
  let date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth() + 1;
  if (year && month) {
    date = year + '-' + month + '-' + '01';
  } else if (year && !month) {
    date = year + '-' + currentMonth + '-' + '01';
  } else if (!year && month) {
    date = currentYear + '-' + month + '-' + '01';
  } else {
    date = null;
  }

  const result = await Transaction.aggregate(
    aggregations.fullReportAggregation(_id),
  );

  const trimDateResult = result.map(item => {
    const indexEndDate = item.date.indexOf('T');
    const trimDate = item.date.substr(0, indexEndDate);
    item.date = trimDate;
    return {
      ...item,
      date: trimDate,
    };
  });

  const filterByDateResult = trimDateResult.filter(item => item.date === date);

  return date ? filterByDateResult : trimDateResult;
};

module.exports = getFullReportByMonth;
