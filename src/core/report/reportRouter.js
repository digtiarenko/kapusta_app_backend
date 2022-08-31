const express = require('express');
const { ctrlWrapper } = require('../../helpers');
const ctrlReport = require('./reportController');

const router = express.Router();

router.get('/', ctrlWrapper(ctrlReport.getFullReportByMonth));
router.get('/monthly-income', ctrlWrapper(ctrlReport.getIncomeReportByMonth));
router.get('/monthly-expense', ctrlWrapper(ctrlReport.getExpenseReportByMonth));

module.exports = router;
