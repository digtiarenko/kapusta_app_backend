const express = require('express');
const { ctrlWrapper } = require('../../helpers');
const ctrlReport = require('./reportController');

const router = express.Router();

router.get('/expense', ctrlWrapper(ctrlReport.getExpenseReport));
router.get('/income', ctrlWrapper(ctrlReport.getIncomeReport));

router.get('/monthly-expense', ctrlWrapper(ctrlReport.getExpenseReportByMonth));
router.get('/monthly-income', ctrlWrapper(ctrlReport.getIncomeReportByMonth));

module.exports = router;
