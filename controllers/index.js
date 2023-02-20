const router = require('express').Router();

const home = require("./homepage")
const dashboard = require("./dashboard")
const location = require("./location")
const api = require('./api');
const newCapturedChar = require('./newCapturedChar');
const auth = require('./auth');

router.use("/", home)
router.use("/dashboard", dashboard)
router.use("/location", location)
router.use("/api", api)
router.use("/newCapturedChar", newCapturedChar)
router.use("/auth", auth)

module.exports = router;
