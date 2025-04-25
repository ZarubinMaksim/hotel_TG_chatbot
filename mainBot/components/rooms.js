//rewieved on 24.04
const { roomsKeyboard, bookingButton } = require('../keyboards/roomsKeyboard');
const { errorTexts } = require('../texts/commonTexts');
const { roomsText } = require('../texts/roomsText');


const sendRoomsList = async (bot, chatId) => {
  try {
    if( 
      !roomsText.main_message ||
      typeof roomsText.main_message !== 'string' ||
      roomsKeyboard.roomsList.length === 0
    ) {
      throw new Error(errorTexts.invalidData);
    }

    await bot.sendMessage(chatId, roomsText.main_message, {
        reply_markup: { keyboard: roomsKeyboard.roomsList }
      }
    );
  } catch (error) {
    console.error(errorTexts.consoleMsgRoomsList, error);
    await bot.sendMessage(chatId, errorTexts.userTryAgainMsg);
  }
};

const sendRoomInfo = async (bot, chatId, data) => {
  try {
    if (
      !data ||
      !Array.isArray(data.images) ||
      data.images.length === 0 ||
      !data.description ||
      typeof data.description !== 'string' ||
      typeof data.book_url !== 'string' ||
      !data.book_url
    ) {
      throw new Error(errorTexts.invalidData);
    }

    await bot.sendMediaGroup(chatId, data.images);
    await bot.sendMessage(chatId, data.description, {
      reply_markup: {
        inline_keyboard: bookingButton (data.book_url)
      },
      parse_mode: "HTML",
    });
  } catch (error) {
    console.error(`${errorTexts.consoleMsgRoomInfo} ${data.title}`, error);
    await bot.sendMessage(chatId, errorTexts.userTryAgainMsg)
  }
};

module.exports = { sendRoomsList, sendRoomInfo };