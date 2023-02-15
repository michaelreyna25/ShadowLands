const router = require("express").Router();
const { Prototype } = require("../models");

router.get("/", async (req, res) => {
  try {
    const prototypeData = await Prototype.findAll();
    const prototypeArr= prototypeData.map(el => (
        el.get({ plain: true})
    ))
    console.log(prototypeArr, '===============================================')
    res.render("newCapturedChar",
        {prototypeArr}
    );
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
