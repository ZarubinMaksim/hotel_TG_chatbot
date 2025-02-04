const servicesDescription = require("../texts/servicesText")

const sendServicesList = (bot, chatId) => {
  bot.sendMessage(chatId, 'Вот что мы можем предложить', {
    reply_markup: {
      keyboard: [
        ['В главное меню 🔙'],
        ...Object.values(servicesDescription).map(service => [service.title])
      ],
      resize_keyboard: true
    },
  })
}

const sendServiceDescription = (bot, chatId, data) => {
  bot.sendPhoto(chatId, data.img, {
    caption: data.description
  })
}

module.exports = { sendServicesList, sendServiceDescription }