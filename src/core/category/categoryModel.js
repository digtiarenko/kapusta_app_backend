const { Schema, model } = require('mongoose');

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
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

const Category = model('category', categorySchema);

module.exports = {
  Category,
};
