const router = require("express").Router()

router.get("/", (req, res) => {
    res.json("TODO OK ")
})

module.exports = router