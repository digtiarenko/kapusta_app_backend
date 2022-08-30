const { Schema, model } = require('mongoose');
const Joi = require('joi');

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
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
    default: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true },
);

const addCategorySchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  type: Joi.string().min(2).max(50).valid('expenses', 'income').required(),
});

const joiSchemas = {
  add: addCategorySchema,
};
const Category = model('category', categorySchema);

module.exports = {
  Category,
  joiSchemas,
};
