//updated 25.04 - try/catch
const servicesKeyboards = require("../keyboards/servicesKeyboards");
const { errorTexts } = require("../texts/commonTexts");
const { servicesText } = require("../texts/servicesText");

const sendServicesList = async (bot, chatId) => {
  try {
    if (
      !servicesText ||
      !servicesText.main_message ||
      typeof servicesText.main_message !== 'string'
    ) {
      throw new Error(errorTexts.invalidData);
    }

    await bot.sendMessage(chatId, servicesText.main_message, {
      reply_markup: {
        keyboard: servicesKeyboards.servicesList,
        resize_keyboard: true
      },
    });
  } catch (error) {
    console.error(errorTexts.consoleMsgServices, error);
    await bot.sendMessage(chatId, errorTexts.userTryAgainMsg);
  }
};

const sendServiceDescription = async (bot, chatId, data) => {
  try {
    if (
      !data ||
      !data.description ||
      typeof data.description !== 'string'
    ) {
      throw new Error(errorTexts.invalidData);
    }

    await bot.sendMessage(chatId, data.description, {
      parse_mode: "HTML",
    });
  } catch (error) {
    console.error(errorTexts.consoleMsgServices, error);
    await bot.sendMessage(chatId, errorTexts.userTryAgainMsg);
  }
};

module.exports = { sendServicesList, sendServiceDescription };