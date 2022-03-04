
const router = require("express").Router();

/* GET home page */
router.use("/", require('./base.routes'))
router.use("/products", require('./products.routes'))
router.use("/events", require('./events.routes'))
router.use("/auth", require('./auth.routes'))
router.use("/upload", require("./upload.routes"))
router.use("/", require('./contact.routes'))

module.exports = router;
