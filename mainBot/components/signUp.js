//updated 25.04 - try catch
const { errorTexts } = require('../texts/commonTexts');
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
      await bot.sendMessage(chatId, 'Если вы уже в отеле, то отправьте в чат номер вашей комнаты и фамилию');
    } else {
      await bot.sendMessage(chatId, `${userStates[chatId].lastname} ${userStates[chatId].name}, Вы уже зарегистрированны в номере ${userStates[chatId].room}`)
    }
  } catch(error) {
    console.error(errorTexts.consoleMsgCheckRegistered, error);
    await bot.sendMessage(chatId, errorTexts.userTryAgainMsg);
  }
};

const checkPersonalDetails = () => {

}

module.exports = {checkIfRegistered, checkPersonalDetails};