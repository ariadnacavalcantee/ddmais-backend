const { projects: projectModel } = require('../models/projects');

const projectsController = {
  create: async (req, res) => {
    try {
      const { body } = req;
      const project = await projectModel.create(body);
      res.status(201).json(project);
    } catch (error) {
      res.status(500).send();
    }
  },
  index: async (req, res) => {
    try {
      const { term, property } = req.query;
      const projects = await projectModel.find({ [property || 'title']: { $regex: term || '' } });

      res.status(200).json(projects);
    } catch {
      res.status(500).send();
    }
  },
  show: async (req, res) => {
    try {
      const { params: { id } } = req;
      const project = await projectModel.findById(id);

      res.status(200).json(project);
    } catch {
      res.status(500).send();
    }
  },
  update: async (req, res) => {
    try {
      const { params: { id }, body } = req;
      const project = await projectModel.findById(id);

      if (!project) return res.status(404).send();

      await projectModel.updateOne({ id }, body);

      return res.status(200).send();
    } catch {
      return res.status(500).send();
    }
  },
  delete: async (req, res) => {
    try {
      const { params: { id } } = req;
      const project = await projectModel.findById(id);

      if (!project) return res.status(404).send();

      await projectModel.deleteOne({ id });

      return res.status(200).send();
    } catch {
      return res.status(500).send();
    }
  },

};
module.exports = projectsController;
