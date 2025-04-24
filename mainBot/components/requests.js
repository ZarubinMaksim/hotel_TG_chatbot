//rewieved on 24.04
const { errorTexts } = require("../texts/commonTexts");
const requestDescriptions = require("../texts/requestsText");


const sendEngeners = async (bot, chatId) => {
  try { 
    if (
      !requestDescriptions.eng.userMessage ||
      typeof requestDescriptions.eng.userMessage !== 'string'
    ) {
      throw new Error(errorTexts.invalidData);
    }

    await bot.sendMessage(chatId, requestDescriptions.eng.userMessage);
  } catch (error) {
    console.error(errorTexts.consoleMsgEngeneers, error);
    await bot.sendMessage(chatId, errorTexts.userTryAgainMsg);
  }
};

const sendHousekeeping = async (bot, chatId) => {
  try {
    if (
      !requestDescriptions.hsk.userMessage ||
      typeof requestDescriptions.hsk.userMessage !== 'string'
    ) {
      throw new Error(errorTexts.invalidData);
    }

    await bot.sendMessage(chatId, requestDescriptions.hsk.userMessage)
  } catch (error) {
    console.error(errorTexts.consoleMsgHK, error);
    await bot.sendMessage(chatId, errorTexts.userTryAgainMsg);
  }
};

module.exports = { sendEngeners, sendHousekeeping };