const { Vidpost } = require('../../models');

const router = require('express').Router();

router.post('/', async (req, res) => {
  try {
    const postData = req.body;
    // 200 status code means the request is successful
    const newPost = await Vidpost.create({
      ...req.body,
      user_id: req.session.userId,
    })
    res.status(200).json(newPost);
  } catch (err) {
    // 400 status code means the server could not understand the request
    res.status(400).json(err);
  }
});

router.get('/newPost', async (req, res) => {
  try {
    res.render('index', {
      layout: 'main'
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
