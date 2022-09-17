const router = require('express').Router();
const { route } = require('./api');
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
module.exports = router;
