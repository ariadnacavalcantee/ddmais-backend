const { Router } = require('express');
const fileController = require('../controllers/fileController');
const upload = require('../config/multer');
const enduredAuthentication = require('../middleware/ensuredAuthenticate');

const fileRouter = Router();

fileRouter.post('/file/cover', enduredAuthentication, upload.single('cover'), fileController.cover);
fileRouter.get('/file/cover/:projectId', fileController.showCover);
fileRouter.post('/file/images', enduredAuthentication, upload.array('files'), fileController.images);
fileRouter.get('/file/:projectId', fileController.index);

module.exports = fileRouter;
