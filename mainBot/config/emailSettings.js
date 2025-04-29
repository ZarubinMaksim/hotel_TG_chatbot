const emailSettings = {
  emailService: process.env.EMAIL_SERVICE,
  botMail: process.env.BOT_MAIL_BOX,
  botMailPass: process.env.BOT_MAIL_BOX_PASS,
  mailContext: 'You have received new review. Please take a moment to review it -',
  hotelEmail: process.env.HOTEL_EMAIL,
  newReviewSubject: 'You have received new review!',
};

module.exports = emailSettings;