const express = require('express');
const { ctrlWrapper } = require('../../helpers');
const ctrlTransaction = require('./transactionController');
const { auth, validation } = require('../../middleware');
const { joiSchemas } = require('./transactionModel');
const router = express.Router();

router.post(
  '/',
  auth,
  validation(joiSchemas.add),
  ctrlWrapper(ctrlTransaction.addTransaction),
);

router.get('/:type', auth, ctrlWrapper(ctrlTransaction.getTransactions));

router.delete(
  '/:transactionId',
  auth,
  validation(joiSchemas.delete, 'params'),
  ctrlWrapper(ctrlTransaction.deleteTransaction),
);

module.exports = router;
