const router = require('express').Router();

const battle = require('./battle');
const captured = require('./captured');
const location = require('./location');
const login = require('./login');
const player = require('./player');
const prototype = require('./prototype');
const user = require('./user');
const signup = require('./signup')

router.use('/battle', battle)
router.use('/captured', captured)
router.use('/location', location)
router.use('/login', login)
router.use('/player', player)
router.use('/prototype', prototype)
router.use('/user', user)
router.use('/signup', signup)

module.exports = router;
