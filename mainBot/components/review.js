const reviewsKeyboards = require("../keyboards/reviewsKeyboards")
const { hotelEmail, newReviewSubject } = require("../texts/emailSettings")
const reviewsTexts = require("../texts/reviewsTexts")
const sendEmail = require("./sendEmail")

const sendPlatformsForReview = (bot, chatId) => {
  bot.sendMessage(chatId, reviewsTexts.main_message, {
    reply_markup: {
      inline_keyboard: [
        ...reviewsKeyboards.reviewsPlatformsList,
      // [{ text: 'В главное меню 🔙', callback_data: 'main_menu'}]
      ]
    }
  })
}

const getReview = async (bot, managerBot, chatId, msg) => {
  await sendEmail(hotelEmail, newReviewSubject, msg.text)
  await managerBot.sendMessage(chatId, msg.text)
  // тут формировать массив с данными гостя и отправлять в панель управления
  await bot.sendMessage(chatId, reviewsTexts.thanks_for_review)
}



module.exports = {sendPlatformsForReview, getReview}