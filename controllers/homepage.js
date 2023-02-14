const router = require("express").Router();


router.get("/", withAuth, async (req, res) => {
  try {
    res.render('landing');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router