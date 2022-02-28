const router = require("express").Router();

/* GET home page */
router.use("/", require('./base.routes'))
router.use("/products", require('./products.routes'))
router.use("/events", require('./events.routes'))

module.exports = router;
