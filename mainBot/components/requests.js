//rewieved on 24.04
const { errorTexts } = require("../texts/commonTexts");
const requestDescriptions = require("../texts/requestsText");


const sendEngeners = async (bot, chatId) => {
  try { 
    if (
      !requestDescriptions.engineer.userMessage ||
      typeof requestDescriptions.engineer.userMessage !== 'string'
    ) {
      throw new Error(errorTexts.invalidData);
    }

    await bot.sendMessage(chatId, requestDescriptions.engineer.userMessage);
  } catch (error) {
    console.error(errorTexts.consoleMsgEngeneers, error);
    await bot.sendMessage(chatId, errorTexts.userTryAgainMsg);
  }
};

const sendHousekeeping = async (bot, chatId) => {
  try {
    if (
      !requestDescriptions.housekeeping.userMessage ||
      typeof requestDescriptions.housekeeping.userMessage !== 'string'
    ) {
      throw new Error(errorTexts.invalidData);
    }

    await bot.sendMessage(chatId, requestDescriptions.housekeeping.userMessage)
  } catch (error) {
    console.error(errorTexts.consoleMsgHK, error);
    await bot.sendMessage(chatId, errorTexts.userTryAgainMsg);
  }
};

module.exports = { sendEngeners, sendHousekeeping };