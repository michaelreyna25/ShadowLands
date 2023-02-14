const router = require('express').Router();
const captured = require('./captured');

router.use('/captured', captured)

module.exports = router;
