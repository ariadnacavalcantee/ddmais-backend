const { Router } = require('express');
const adminController = require('../controllers/adminController');

const adminRouter = Router();

adminRouter.post('/admin', adminController.create);

module.exports = adminRouter;
