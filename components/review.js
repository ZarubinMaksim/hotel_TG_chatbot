const reviewsKeyboards = require("../keyboards/reviewsKeyboards")
const { hotelEmail, newReviewSubject } = require("../texts/emailSettings")
const sendEmail = require("./sendEmail")

const sendPlatformsForReview = (bot, chatId) => {
  bot.sendMessage(chatId, 'Выберите один из сервисов ниже или напишите его прямо в чат начав сообщение со слова "Отзыв". Например - "Отзыв, Проживали в номере 702 и все очень понравилось!', {
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
  await bot.sendMessage(chatId, 'Спасибо за ваш отзыв! В ближайщее время мы с ним ознакомимся!')
}



module.exports = {sendPlatformsForReview, getReview}