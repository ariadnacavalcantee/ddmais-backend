const mongoose = require('mongoose');

const { Schema } = mongoose;
const fileSchema = new Schema(
  {
    url: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: true,
    },
    projectId: {
      type: String,
      required: false,
    },
  },
  { timestamps: true },
);
const File = mongoose.model('File', fileSchema);
module.exports = {
  File,
  fileSchema,
};
