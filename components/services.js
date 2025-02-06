const servicesKeyboards = require("../keyboards/servicesKeyboards")

const sendServicesList = (bot, chatId) => {
  bot.sendMessage(chatId, 'Вот что мы можем предложить', {
    reply_markup: {
      keyboard: servicesKeyboards.servicesList,
      resize_keyboard: true
    },
  })
}

const sendServiceDescription = (bot, chatId, data) => {
  bot.sendMessage(chatId, data.description)
}

module.exports = { sendServicesList, sendServiceDescription }