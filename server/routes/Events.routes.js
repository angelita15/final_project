const router = require("express").Router()

const Event = require('./../models/Event.model')

//crear event rout
router.post("/createEvents", (req, res) => {

    const { title, date, streetName, streetNumber, postCode, city, description, image } = req.body
    const address = { street: { streetName, streetNumber }, postCode, city }
    console.log(req.body)
    Event
        .create({ title, date, address, description, image }, { new: true })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

// todos los eventos rout
router.get("/getAllEvents", (req, res) => {

    Event
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

//detalles del evento rout
router.get("/getOneEvents/:Events_id", (req, res) => {

    const { event_id } = req.params

    Event
        .findById(event_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

// edit event rout
router.put("/getOneEvent/:event_id/edit", (req, res) => {

    const { event_id } = req.params
    const { title, date, streetName, streetNumber, postCode, city, description, image } = req.body
    const address = { street: { streetName, streetNumber }, postCode, city }

    Event
        .findByIdAndUpdate(event_id, { title, date, address, description, image })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


// --- DELETE  event
router.delete("/getOneEvent/:event_id/delete", (req, res) => {

    const { event_id } = req.params

    Event
        .findByIdAndDelete(event_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

module.exports = router