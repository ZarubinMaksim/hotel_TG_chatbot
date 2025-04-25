const specialOffersKeyboards = require('../keyboards/specialOffersKeyboards');
const { errorTexts } = require('../texts/commonTexts');
const { specialOffersTexts } = require('../texts/specialOffersText');

const sendSpecialOffers = async (bot, chatId) => {
  try {
    if(
      !specialOffersTexts ||
      !specialOffersTexts.main_message ||
      typeof specialOffersTexts.main_message !== 'string' ||
      !specialOffersKeyboards.specialOffersKeyboard
    ) {
      throw new Error(errorTexts.invalidData);
    }

    await bot.sendMessage(chatId, specialOffersTexts.main_message, {
      reply_markup: {
        keyboard: specialOffersKeyboards.specialOffersKeyboard,
      },
    });
  } catch (error) {
    console.error(errorTexts.consoleMsgSpecialOffers, error);
    await bot.sendMessage(chatId, errorTexts.userTryAgainMsg);
  }
};

const sendSpecialOfferInfo = async (bot, chatId, data) => {
  try {
    if (
      !data ||
      !Array.isArray(data.images) ||
      data.images.length === 0,
      !data.description ||
      typeof data.description !== 'string'
    ) {
      throw new Error(errorTexts.invalidData);
    }

    await bot.sendMediaGroup(chatId, data.images);
    await bot.sendMessage(chatId, data.description);
  } catch (error) {
    console.error(errorTexts.consoleMsgSpecialOffers, error);
    await bot.sendMessage(chatId, errorTexts.userTryAgainMsg);
  }
};

module.exports = { sendSpecialOffers, sendSpecialOfferInfo };