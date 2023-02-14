const router = require('express').Router();
const captured = require('./captured');
const login = require('./login');

router.use('/captured', captured)

module.exports = router;
