const mainKeyboard = require("../keyboards/mainKeyboard");
const startTexts = require("../texts/startTexts");

const sendMainMenu = (bot, chatId) => {
  console.log(mainKeyboard)
  bot.sendMessage(chatId, startTexts.main_message, {
    reply_markup: {
      keyboard: mainKeyboard,
    resize_keyboard: true,
    one_time_keyboard: false
    } 
  });
}
module.exports = sendMainMenu