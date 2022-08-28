const express = require('express');
const { ctrlWrapper } = require('../../helpers');
const ctrlAuth = require('./authController');

const router = express.Router();

router.post('/register', ctrlWrapper(ctrlAuth.register));

router.post('/login', ctrlWrapper(ctrlAuth.login));

router.get('/google', ctrlWrapper(ctrlAuth.googleAuth));

router.get('/google-redirect', ctrlWrapper(ctrlAuth.googleRedirect));

router.get('/logout', ctrlWrapper(ctrlAuth.logout));

module.exports = router;
