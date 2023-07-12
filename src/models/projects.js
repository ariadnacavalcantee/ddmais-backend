const mongoose = require('mongoose');

const { Schema } = mongoose;
const projectsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    subjects: {
      type: [String],
      required: false,
    },
    methodology: {
      type: [String],
      required: false,
    },
    creationFields: {
      type: [String],
      required: true,
    },
    tools: {
      type: [String],
      required: true,
    },
    years: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true },
);
const projects = mongoose.model('Projects', projectsSchema);
module.exports = {
  projects,
  projectsSchema,
};
