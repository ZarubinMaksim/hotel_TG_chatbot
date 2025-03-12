const nodemailer = require('nodemailer')
const { emailService, botMail, botMailPass, mailContext } = require('../texts/emailSettings')

const transporter = nodemailer.createTransport({
  service: emailService,
  auth: {
    user: botMail,
    pass: botMailPass
  }
})

const sendEmail = (to, subject, text) => {
  console.log(to, subject, text)
  const mailOptions = {
    from: botMail,
    to: to,
    subject: subject,
    text: `${mailContext} ${text}`
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('error while sending', error)
    } else {
      console.log('sent', info.response)
    }
  })
}

module.exports = sendEmail