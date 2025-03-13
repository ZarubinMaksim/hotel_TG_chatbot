const {mainKeyboardFull, mainKeyboardShort} = require("../keyboards/mainKeyboard");
const startTexts = require("../texts/startTexts");
const { userStates } = require("./currentUsers");


const sendMainMenu = (bot, chatId) => {

  if (userStates[chatId]) {
    console.log(userStates[chatId])
  }

  bot.sendMessage(chatId, startTexts.main_message, {
    reply_markup: {
      keyboard: userStates[chatId].room !== '' ? mainKeyboardFull : mainKeyboardShort,
    resize_keyboard: true,
    one_time_keyboard: false
    } 
  });
}
module.exports = sendMainMenu