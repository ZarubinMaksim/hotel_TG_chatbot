const specialOffersKeyboards = require('../keyboards/specialOffersKeyboards')
const {specialOffersTexts} = require('../texts/specialOffersText')

const sendSpecialOffers = (bot, chatId) => {


  bot.sendMessage(chatId, specialOffersTexts.main_message, {
    reply_markup: {
      keyboard: specialOffersKeyboards.specialOffersKeyboard,
      resize_keyboard: true
    }
})

}

const sendSpecialOfferInfo = (bot, chatId, data) => {
  bot.sendPhoto(chatId, data.image, {
    caption: data.description
  })
}

module.exports = {sendSpecialOffers, sendSpecialOfferInfo}