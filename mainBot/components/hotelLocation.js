const { errorTexts } = require("../texts/commonTexts");
const hotelLocationText = require("../texts/hotelLocationText");

const sendHotelLocation = async (bot, chatId) => {
  try {
    if (
      typeof hotelLocationText.latitude !== 'number' ||
      typeof hotelLocationText.longitude !== 'number' ||
      typeof hotelLocationText.hotel_address !== 'string'
    ) {
      throw new Error(errorTexts.invalidData)
    }

    await bot.sendLocation(chatId, hotelLocationText.latitude, hotelLocationText.longitude)
    await bot.sendMessage(chatId, hotelLocationText.hotel_address, {
      parse_mode: 'HTML',
    });
  } catch (error) {
    console.error(errorTexts.consoleMsgLocation, error);
    await bot.sendMessage(chatId, errorTexts.userTryAgainMsg);
  }
};

module.exports = sendHotelLocation;