const { Router } = require('express');

const authenticateController = require('../controllers/authenticateController');
const projectRoute = require('./projectRoute');
const adminRouter = require('./adminRoute');
const fileRouter = require('./fileRoute');

const router = Router();

router.use('/', adminRouter);
router.use('/', projectRoute);
router.use('/', fileRouter);

// auth
router.post('/auth/signin', authenticateController.create);

module.exports = router;
