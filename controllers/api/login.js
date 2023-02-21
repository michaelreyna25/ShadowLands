const router = require("express").Router();
const { User } = require('../../models');

// Create user endpoint
router.post('/user', async (req, res) => {
  try {
    const userData = await User.create({
      id: req.body.id,
      password: req.body.password
    });
    req.session.user_id = userData.id;
    req.session.logged_in = true;
    res.json({ user_id: userData.id, message: 'User logged in!' });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Login endpoint
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findByPk(req.body.id);
    if (!userData) {
      res.status(400).json({ message: 'Incorrect username or password, please try again' });
      return;
    }
    const validPassword = await userData.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect username or password, please try again' });
      return;
    }
    req.session.user_id = userData.id;
    req.session.logged_in = true;
    res.json({ user_id: userData.id, message: 'You are now logged in!' });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Get user by ID endpoint
router.get('/user/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);
    if (!userData) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    res.json({ user_id: userData.id }); // only send back the user ID
  } catch (err) {
    res.status(400).json({ message: 'Invalid user ID' });
  }
}
);


module.exports = router;
