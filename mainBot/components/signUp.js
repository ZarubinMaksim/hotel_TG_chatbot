//updated 25.04 - try catch
const { errorTexts } = require('../texts/commonTexts');
const signUpTexts = require('../texts/signUpTexts');
const { userStates } = require('./currentUsers');

const checkIfRegistered = async (bot, chatId) => {
  try {
    if (
      !userStates ||
      !userStates[chatId]
    ) {
      throw new Error(errorTexts.invalidData)
    }

    if (userStates[chatId].room == '') {
      await bot.sendMessage(chatId, signUpTexts.detailsRequest);
    } else {
      await bot.sendMessage(chatId, `${userStates[chatId].lastname} ${userStates[chatId].name}${signUpTexts.alreadyRegisteredIn} ${userStates[chatId].room}`)
    }
  } catch(error) {
    console.error(errorTexts.consoleMsgCheckRegistered, error);
    await bot.sendMessage(chatId, errorTexts.userTryAgainMsg);
  }
};

const checkPersonalDetails = () => {

}

module.exports = { checkIfRegistered, checkPersonalDetails };