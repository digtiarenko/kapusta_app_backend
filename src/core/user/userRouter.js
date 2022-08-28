const express = require('express');
const { ctrlWrapper } = require('../../helpers');
const ctrlUser = require('./userController');

const router = express.Router();

router.post('/balance', ctrlWrapper(ctrlUser.addBalance));

router.get('/balance', ctrlWrapper(ctrlUser.getBalance));

router.get('/current', ctrlWrapper(ctrlUser.currentUser));

module.exports = router;
