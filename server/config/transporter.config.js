const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'angela.rueda15@gmail.com',
        pass: 'nosemuybienqueponeraqui'
    }
})

module.exports = transporter