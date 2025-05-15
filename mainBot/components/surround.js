const { surroundingsKeyboards, surroundingsSubKeyboard } = require("../keyboards/surroundingsKeyboards");
const { errorTexts } = require("../texts/commonTexts");
const { surroundingsTexts } = require("../texts/surroundText");

const sendSurroundingsList = async (bot, chatId) => {
  try {
    if (
      !surroundingsTexts ||
      !surroundingsTexts.main_message ||
      typeof surroundingsTexts.main_message !== 'string' ||
      !surroundingsKeyboards.surroundingsKeyboard
    ) {
      throw new Error(errorTexts.invalidData);
    }

    await bot.sendMessage(chatId, surroundingsTexts.main_message, {
      reply_markup: {
        keyboard: surroundingsKeyboards.surroundingsKeyboard,
        resize_keyboard: true,
      }
    });
  } catch (error) {
    console.error(errorTexts.consoleMsgSurroundings, error);
    await bot.sendMessage(chatId, errorTexts.userTryAgainMsg);
  }
};

const sendSurrounding =  async (bot, chatId, data) => {
  try {
    if(
      !data ||
      !surroundingsTexts ||
      !surroundingsTexts.sub_main_message ||
      typeof surroundingsTexts.sub_main_message !== 'string'
    ) {
      throw new Error(errorTexts.invalidData);
    }

    await bot.sendMessage(chatId, surroundingsTexts.sub_main_message,{ 
      reply_markup: {
        keyboard: surroundingsSubKeyboard(data),
        resize_keyboard: true
      },
    });
  } catch (error) {
    console.error(errorTexts.consoleMsgSurroundings, error);
    await bot.sendMessage(chatId, errorTexts.userTryAgainMsg);
  }
};

const sendExactSurrounding = async (bot, chatId, data) => {
  try {
    if (
      !data ||
      !Array.isArray(data.images) ||
      data.images.length === 0 ||
      !data.description ||
      typeof data.description !== 'string' ||
      !data.latitude ||
      !data.longitude ||
      typeof data.latitude !== 'number' ||
      typeof data.longitude !== 'number'
    ) {
      throw new Error(errorTexts.invalidData);
    }

    await bot.sendMediaGroup(chatId, data.images);
    await bot.sendMessage(chatId, data.description);
    await bot.sendLocation(chatId, data.latitude, data.longitude);
  } 
  catch (error) {
    console.error(errorTexts.consoleMsgSurroundings, error);
    await bot.sendMessage(chatId, errorTexts.userTryAgainMsg);
  }
};

module.exports = { sendSurroundingsList, sendSurrounding, sendExactSurrounding };