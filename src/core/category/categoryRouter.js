const express = require('express');
const { ctrlWrapper } = require('../../helpers');
const ctrlCategory = require('./categoryController');
const { validation, auth, checkRoles } = require('../../middleware');
const { joiSchemas } = require('./categoryModel');

const router = express.Router();

router.post(
  '/',
  auth,
  validation(joiSchemas.add),
  ctrlWrapper(ctrlCategory.addCategory),
);

router.get('/', auth, ctrlWrapper(ctrlCategory.getAll));

router.patch(
  '/',
  auth,
  checkRoles(['ADMIN']),
  ctrlWrapper(ctrlCategory.getAll),
);

module.exports = router;
