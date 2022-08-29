const { model, Schema } = require('mongoose');

const roleSchema = Schema(
  {
    value: {
      type: String,
      default: 'USER',
      unique: true,
    },
  },
  { timestamps: true, versionKey: false },
);

module.exports = model('Role', roleSchema);
