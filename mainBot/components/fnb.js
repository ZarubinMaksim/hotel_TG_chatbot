//rewieved on 24.04
const { restaurantsNameList, commonRestaurantTexts } = require('../texts/restaurantsText');
const restaurantsKeyboards = require('../keyboards/restaurantsKeyboards');
const { errorTexts } = require('../texts/commonTexts');
const hotelOnlineMenu = require('../config/hotelMenues');

const sendRestaurantsList = async (bot, chatId) => {
  try {
    if (
      !restaurantsNameList ||
      typeof restaurantsNameList !== 'string'
    ) {
      throw new Error(errorTexts.invalidData);
    }

    await bot.sendMessage(chatId, restaurantsNameList, {
      reply_markup: {
        keyboard: [...restaurantsKeyboards.restaurantsListKeyboard],
        resize_keyboard: true
      },
      parse_mode: "HTML" 
    });
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

const sendRoomDiningMenu = async (bot, chatId, encodedGuestDetails) => {
  const roomServiceUrl = hotelOnlineMenu.roomService(encodedGuestDetails);
  console.log(roomServiceUrl)
  try {
    await bot.sendMessage(chatId, commonRestaurantTexts.room_service, {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: commonRestaurantTexts.roomServiceMenu, 
              web_app: { url: roomServiceUrl}
            }
          ]
        ]

      }
    })
  } catch (error) {
    console.error(errorTexts.consoleMsgRoomService, error);
    await bot.sendMessage(chatId, errorTexts.userTryAgainMsg);
  }
}
module.exports = { sendRestaurantsList, sendRestaurantInfo, sendRoomDiningMenu };