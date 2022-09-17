const router = require('express').Router();
const { Vidpost } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  const vidPostData = await Vidpost.findAll();
  const videos = vidPostData.map((userVideo) => {
    return userVideo.toJSON();
  });
  res.render('homepage', {
    videos
  });
});

router.get('/login', (req, res) => {
  res.render('login');
});

module.exports = router;
