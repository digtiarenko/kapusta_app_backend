const {createError} = require('../../../helpers');

const {Transaction} = require('../transactionModel');

const deleteTransaction = async(req, res) => {
  const { transactionId } = req.params;
  const result = await Transaction.findByIdAndRemove(transactionId);
  if (!result) {
    throw createError(404);
  }
  res.status(200).json({
    message: 'transaction deleted',
    data: { result },
  });
};

module.exports = deleteTransaction;
