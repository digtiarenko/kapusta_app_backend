const mongoose = require('mongoose');
const Joi = require('joi');

const { Schema, model } = mongoose;

const dateRegexp =
  /^((19|2\d)\d\d)-((0?[1-9])|(1[0-2]))-((0?[1-9])|([12]\d)|(3[01]))$/;

const transactionSchema = new Schema(
  {
    date: {
      type: String,
      validate: dateRegexp,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      ref: 'category',
    },
    value: {
      type: Number,
      required: true,
      default: 0,
    },
    type: {
      type: String,
      required: true,
      enum: {
        values: ['expenses', 'income'],
        message:
          "{VALUE} is not supported, have to choose between 'expenses' or 'income' ",
      },
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  },
  { versionKey: false, timestamps: true },
);

const addTransactionSchema = Joi.object({
  date: Joi.string().pattern(dateRegexp).required(),
  description: Joi.string().min(2).max(100).required(),
  value: Joi.number().required(),
  type: Joi.string().valid('expenses', 'income').required(),
  category: Joi.string()
    .custom((value, helpers) => {
      const isValidObjectId = mongoose.Types.ObjectId.isValid(value);
      if (!isValidObjectId) {
        return helpers.message({
          custom: "Invalid 'categoryId'. Must be a MongoDB ObjectId",
        });
      }
      return value;
    })
    .required(),
});

const deleteTransactionSchema = Joi.object({
  transactionId: Joi.string()
    .custom((value, helpers) => {
      const isValidObjectId = mongoose.Types.ObjectId.isValid(value);
      if (!isValidObjectId) {
        return helpers.message({
          custom: "Invalid 'transactionId'. Must be a MongoDB ObjectId",
        });
      }
      return value;
    })
    .required(),
});

const joiSchemas = {
  add: addTransactionSchema,
  delete: deleteTransactionSchema,
};
const Transaction = model('transaction', transactionSchema);

module.exports = {
  Transaction,
  joiSchemas,
};
