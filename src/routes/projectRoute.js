const { Router } = require('express');
const projectsController = require('../controllers/projectsController');
const enduredAuthentication = require('../middleware/ensuredAuthenticate');

const projectRouter = Router();

projectRouter.get('/projects', projectsController.index);
projectRouter.post('/project', enduredAuthentication, projectsController.create);
projectRouter.get('/project/:id', projectsController.show);
projectRouter.put('/project/:id', enduredAuthentication, projectsController.update);
projectRouter.delete('/project/:id', enduredAuthentication, projectsController.delete);

module.exports = projectRouter;
