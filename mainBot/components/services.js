const servicesKeyboards = require("../keyboards/servicesKeyboards")
const { servicesText } = require("../texts/servicesText")

const sendServicesList = (bot, chatId) => {
  bot.sendMessage(chatId, servicesText.main_message, {
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