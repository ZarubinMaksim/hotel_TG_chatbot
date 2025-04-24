//rewieved on 24.04
const carRentDescriptions = require("../texts/carRent");

const { errorTexts } = require("../texts/commonTexts");

const sendCarRent = async (mainBot, chatId) => {
  try {
    await mainBot.sendMessage(chatId, carRentDescriptions.mainMessage, {
      parse_mode: "HTML",
    });
  } catch (error) {
    console.error(errorTexts.consoleMsgCarRent, error);
    await mainBot.sendMessage(chatId, errorTexts.userTryAgainMsg);
  }
};

module.exports = sendCarRent;