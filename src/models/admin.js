const mongoose = require('mongoose');

const { Schema } = mongoose;
const adminSchema = new Schema(
  {
    name: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
    },
    siape: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);
const Admin = mongoose.model('Admin', adminSchema);
module.exports = {
  Admin,
  adminSchema,
};
