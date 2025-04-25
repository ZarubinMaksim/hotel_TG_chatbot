//updated 25.04 - try/catch
const nodemailer = require('nodemailer');
const { errorTexts } = require('../texts/commonTexts');
const { emailService, botMail, botMailPass, mailContext } = require('../texts/emailSettings');

const transporter = nodemailer.createTransport({
  service: emailService,
  auth: {
    user: botMail,
    pass: botMailPass
  }
})

const sendEmail = async (to, subject, text) => {
  try {
    if (
      !to ||
      !subject ||
      !text ||
      typeof to !== 'string' ||
      typeof subject !== 'string' ||
      typeof text !== 'string'
    ) {
      throw new Error(errorTexts.invalidData);
    }

    const mailOptions = {
      from: botMail,
      to: to,
      subject: subject,
      text: `${mailContext} ${text}`
    }
    // Возвращаем Promise для sendMail
    const info = await new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          reject(error);
        } else {
          resolve(info);
        }
      });
    });
    console.log('sent', info.response);
  } catch (error) {
    console.error(errorTexts.consoleMsgSendEmail, error)
  }
};

module.exports = sendEmail;