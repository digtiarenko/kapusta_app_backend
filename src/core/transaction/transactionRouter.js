const express = require('express');
const { ctrlWrapper } = require('../../helpers');
const ctrlTransaction = require('./transactionController');
const { auth } = require('../../middleware');

const router = express.Router();

router.get('/expense', ctrlWrapper(ctrlTransaction.getExpenseTransactions));

router.get('/income', ctrlWrapper(ctrlTransaction.getIncomeTransactions));

router.post(
  '/expense/:categoryId',
  auth,
  ctrlWrapper(ctrlTransaction.addExpenseTransaction),
);

router.post(
  '/income/:categoryId',
  auth,
  ctrlWrapper(ctrlTransaction.addIncomeTransaction),
);

router.delete(
  '/:transactionId',
  auth,
  ctrlWrapper(ctrlTransaction.deleteTransaction),
);

module.exports = router;
