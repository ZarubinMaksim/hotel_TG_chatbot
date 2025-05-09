const { mainKeyboardFull, mainKeyboardShort } = require("../keyboards/mainKeyboard");
const { startTexts, errorTexts } = require("../texts/commonTexts");
const { userStates } = require("./currentUsers");


const sendMainMenu = async (bot, chatId) => {
  console.error('USERSTATES', userStates)
  // if (userStates[chatId]) {
  //   // console.log(userStates[chatId])
  // }

  try {
    // if(
    //   !startTexts ||
    //   !startTexts.main_message ||
    //   typeof startTexts.main_message !== 'string' ||
    //   !userStates ||
    //   !userStates[chatId] ||
    //   !mainKeyboardFull || 
    //   !mainKeyboardShort
    // ) {
    //   throw new Error(errorTexts.invalidData);
    // }

    await bot.sendMessage(chatId, startTexts.main_message, {
      reply_markup: {
        keyboard: userStates[chatId].room && userStates[chatId].room !== '' ? mainKeyboardFull : mainKeyboardShort,
      resize_keyboard: true,
      one_time_keyboard: false
      } 
    });
  } catch (error) {
    console.error(errorTexts.consoleMsgMainMenu, error);
    await bot.sendMessage(chatId, errorTexts.userTryAgainMsg);
  }
};

module.exports = sendMainMenu;