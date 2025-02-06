const hotelLocationText = require("../texts/hotelLocationText")

const sendHotelLocation = (bot, chatId) => {
  bot.sendMessage(chatId, hotelLocationText.hotel_address)
  bot.sendLocation(chatId, hotelLocationText.latitude, hotelLocationText.longitude, {
    // reply_markup: {
    //   keyboard: [
    //     ['В главное меню 🔙']
    //   ],
    //   resize_keyboard: true
    // }
  })
}

module.exports = sendHotelLocation