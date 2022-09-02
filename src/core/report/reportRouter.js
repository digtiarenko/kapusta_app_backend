const express = require('express');
const { ctrlWrapper } = require('../../helpers');
const ctrlReport = require('./reportController');
const { auth } = require('../../middleware');

const router = express.Router();

router.get('/', ctrlWrapper(ctrlReport.getFullReportByMonth));
router.get(
  '/monthly-income',
  auth,
  ctrlWrapper(ctrlReport.getIncomeReportByMonth),
);
router.get(
  '/monthly-expense',
  auth,
  ctrlWrapper(ctrlReport.getExpenseReportByMonth),
);

module.exports = router;
