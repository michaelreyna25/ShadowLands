const router = require("express").Router();
const { User, Player } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    res.render("home", {});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard/:id', async (req, res) => {
  try {
    const dashboardData = await Player.findByPk(req.params.id.
      player_id, {
      attributes: { exclude: ["user_id"] },
      include: [{ model: Location }]
    });
    const dashboard = dashboardData.get({ plain: true });
    res.render('dashboard', {
      ...dashboard,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});
module.exports = router;
