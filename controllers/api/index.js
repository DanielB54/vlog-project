const router = require('express').Router();
const postRoutes = require('./postRoutes');
const usrRoutes = require('./user-routes')
router.use('/posts', postRoutes);

module.exports = router;
