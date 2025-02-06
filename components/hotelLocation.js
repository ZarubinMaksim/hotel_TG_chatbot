const hotelLocationText = require("../texts/hotelLocationText")

const sendHotelLocation = async(bot, chatId) => {
  try {
    await bot.sendLocation(chatId, hotelLocationText.latitude, hotelLocationText.longitude)
    await bot.sendMessage(chatId, hotelLocationText.hotel_address)
  } catch (error) {
    console.log('Error', error)
  }
}

module.exports = sendHotelLocation