// const roomsListMainPhoto = 'images/rooms/roomsListMainImage.jpeg'
const {roomsKeyboard, bookingButton} = require('../keyboards/roomsKeyboard');
const { roomsText } = require('../texts/roomsText');


const sendRoomsList = (bot, chatId) => {
  bot.sendMessage(chatId, roomsText.main_message,
    {
      reply_markup: {
        keyboard: roomsKeyboard.roomsList
      }
    }
  )
}

const sendRoomInfo = async(bot, chatId, data) => {
  console.log(data)
    await bot.sendMediaGroup(chatId, data.images);
    await bot.sendMessage(chatId, data.description, {
      reply_markup: {
        inline_keyboard: bookingButton (data.book_url)
      },
      parse_mode: "HTML" 
    })
  }

module.exports = {sendRoomsList, sendRoomInfo}