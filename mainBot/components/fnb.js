//rewieved on 24.04
const { restaurantsNameList } = require('../texts/restaurantsText');
const restaurantsKeyboards = require('../keyboards/restaurantsKeyboards');
const { errorTexts } = require('../texts/commonTexts');

const sendRestaurantsList = async (bot, chatId) => {
  try {
    await bot.sendMessage(chatId, restaurantsNameList, {
      reply_markup: {
        keyboard: [...restaurantsKeyboards.restaurantsListKeyboard],
        resize_keyboard: true
      }
    })
  } catch (error) {
    console.error(errorTexts.consoleMsgRestaurantsList, error);
    await bot.sendMessage(chatId, errorTexts.userTryAgainMsg);
  }
};

const sendRestaurantInfo = async (bot, chatId, data) => {
  try {
    if (!data || 
      !Array.isArray(data.images) || 
      data.images.length === 0 || 
      typeof data.description !== 'string' || 
      !restaurantsKeyboards[`${data.callback}Keyboard`]
    ) {
      throw new Error(errorTexts.invalidData)
    }

    await bot.sendMediaGroup(chatId, data.images);
    await bot.sendMessage(chatId, data.description, {
      reply_markup: {
        inline_keyboard: restaurantsKeyboards[`${data.callback}Keyboard`]
      },
      parse_mode: "HTML" 
    });
  } catch (error) {
    console.error(errorTexts.consoleMsgRestaurantInfo, error);
    await bot.sendMessage(chatId, errorTexts.userTryAgainMsg);
  }
};
module.exports = { sendRestaurantsList, sendRestaurantInfo };