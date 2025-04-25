//rewieved on 24.04 - try/catch added
//rewieved on 25.04 - if added
const carRentDescriptions = require("../texts/carRent");

const { errorTexts } = require("../texts/commonTexts");

const sendCarRent = async (mainBot, chatId) => {
  try {
    if (
      !carRentDescriptions.mainMessage ||
      typeof carRentDescriptions.mainMessage !== 'string'
    ) {
      throw new Error(errorTexts.invalidData);
    }
    
    await mainBot.sendMessage(chatId, carRentDescriptions.mainMessage, {
      parse_mode: "HTML",
    });
  } catch (error) {
    console.error(errorTexts.consoleMsgCarRent, error);
    await mainBot.sendMessage(chatId, errorTexts.userTryAgainMsg);
  }
};

module.exports = sendCarRent;