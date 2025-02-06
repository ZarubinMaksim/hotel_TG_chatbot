const bot = require("..")
const requestDescriptions = require("../texts/requestsText")


const sendEngeners = (bot, chatId) => {
  bot.sendMessage(chatId, requestDescriptions.eng.userMessage)
}

const sengHousekeeping = (bot, chatId) => {
  bot.sendMessage(chatId, requestDescriptions.hsk.userMessage)
}


module.exports = {sendEngeners, sengHousekeeping}