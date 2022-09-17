const router = require('express').Router();
const withAuth = require('../utils/auth');
router.get('/', withAuth, (req, res) => {
  res.render('homepage');
});

router.get('/login', (req, res) => {
  res.render('login');
});
module.exports = router;
