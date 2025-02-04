const bot = require("..")

const engMessage = 'Если что-то не работает, пожалуйста, напишите в чат - мы пришлем специалистов.'
const hskMessage = 'Если нужна уборка или нужно принести что-то из косметических принадллежностей, напишите в чат - мы пришлем коллег.'

const sendEngeners = (bot, chatId) => {
  bot.sendMessage(chatId, engMessage)
}

const sengHousekeeping = (bot, chatId) => {
  bot.sendMessage(chatId, hskMessage)
}


module.exports = {sendEngeners, sengHousekeeping}