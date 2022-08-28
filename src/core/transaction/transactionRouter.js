const express = require('express');
const { ctrlWrapper } = require('../../helpers');
const ctrlTransaction = require('./transactionController');

const router = express.Router();

router.get('/expense', ctrlWrapper(ctrlTransaction.getExpenseTransactions));

router.get('/income', ctrlWrapper(ctrlTransaction.getIncomeTransactions));

router.post(
  '/expense/:categoryId',
  ctrlWrapper(ctrlTransaction.addExpenseTransaction),
);

router.post(
  '/income/:categoryId',
  ctrlWrapper(ctrlTransaction.addIncomeTransaction),
);

router.delete(
  '/:transactionId',
  ctrlWrapper(ctrlTransaction.deleteTransaction),
);

module.exports = router;
