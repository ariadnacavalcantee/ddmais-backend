const { File: FileModel } = require('../models/file');

const fileController = {
  showCover: async (req, res) => {
    const { params: { projectId } } = req;
    const file = await FileModel.findOne({ projectId, type: 'cover' });
    return res.json(file);
  },
  cover: async (req, res) => {
    try {
      const { file, body: { projectId } } = req;
      const fileCreated = await FileModel.create({
        url: `http://localhost:3001/files/${file.filename}`,
        projectId,
        type: 'cover',
      });

      res.json(fileCreated);
    } catch (error) {
      console.log(error);
    }
  },
  images: async (req, res) => {
    try {
      const { files, body: { projectId } } = req;
      const filesCreated = await Promise.all(files.map(async (file) => {
        const fileCreated = await FileModel.create({
          url: `http://localhost:3001/files/${file.filename}`,
          projectId,
          type: 'image',
        });
        return fileCreated;
      }));

      res.json(filesCreated);
    } catch (error) {
      console.log(error);
    }
  },
  index: async (req, res) => {
    try {
      const { params: { projectId } } = req;

      const files = await FileModel.find({ projectId });

      res.json(files);
    } catch (error) {
      console.log(error);
    }
  },
};
module.exports = fileController;
