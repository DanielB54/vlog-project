const router = require('express').Router();

router.get('/', (req, res)=> {

const withAuth = require('../utils/auth');
router.get('/', withAuth, (req, res) => {

  res.render('homepage');
});

router.get('/login', (req, res) => {
  res.render('login');
});
module.exports = router;
