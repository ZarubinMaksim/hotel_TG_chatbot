const specialOffersKeyboards = require('../keyboards/specialOffersKeyboards')
const {specialOffersTexts} = require('../texts/specialOffersText')

const sendSpecialOffers = (bot, chatId) => {

  bot.sendMessage(chatId, specialOffersTexts.main_message, {
    reply_markup: {
      keyboard: specialOffersKeyboards.specialOffersKeyboard,

    }
})

}

const sendSpecialOfferInfo = async(bot, chatId, data) => {
  try {
    await bot.sendMediaGroup(chatId, data.images)
    await bot.sendMessage(chatId, data.description)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {sendSpecialOffers, sendSpecialOfferInfo}