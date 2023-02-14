<<<<<<< HEAD
const router = require('express').Router();

router.get('/', async (req, res) => {
    try{

    } catch (err) {
        
    }

});
=======
const router = require("express").Router();


router.get("/", withAuth, async (req, res) => {
  try {
    res.render('landing');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router
>>>>>>> abb6742ed5f6ede0988bf7b987913ff352515ae9
