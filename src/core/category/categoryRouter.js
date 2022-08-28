const express = require('express');
const { ctrlWrapper } = require('../../helpers');
const ctrlCategory = require('./categoryController');

const router = express.Router();

router.post('/', ctrlWrapper(ctrlCategory.addCategory));

router.get('/', ctrlWrapper(ctrlCategory.getAll));

module.exports = router;
