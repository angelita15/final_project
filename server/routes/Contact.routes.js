const router = require("express").Router()
const transporter = require('../config/transporter.config')



router.post('/contact', (req, res) => {
    const { email, subject, message } = req.body
  

    
    transporter.sendMail({
        from: '"bla" < karolinaruedapagina@gmail.com>',
        to: 'angela.rueda15@gmaial.com',
        subject: 'Nuevo mensaje desde el formulario de contacto.',
        text: message,
        html: `<h2>Nuevo mensaje de contacto</h2>
                <p>Ha recibido un nuevo mensaje de: <b>${email}</b> </p>
                <p>Mensaje: ${message}</p>`
        })
        .then(info => res.send(info))
        .catch(error => console.log(error))
})


module.exports = router