const mainKeyboard = require("../keyboards/mainKeyboard");
const startTexts = require("../texts/startTexts");
const User = require('../../db/models/user')

const sendMainMenu = (bot, chatId) => {

  bot.sendMessage(chatId, startTexts.main_message, {
    reply_markup: {
      keyboard: mainKeyboard,
    resize_keyboard: true,
    one_time_keyboard: false
    } 
  });
}
module.exports = sendMainMenu