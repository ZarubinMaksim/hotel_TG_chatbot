const menuButtons = require('../texts/menuButtons')
const {specialOffersDescription, specialOffersTexts} = require('../texts/specialOffersText')
const {createTwoLinedKeyboard} = require('./commomFunctions')

const sendSpecialOffers = (bot, chatId) => {
  // two-lined menu
  const offers = Object.values(specialOffersDescription)
  .filter(offer => offer.isActive)
  .map(offer => offer.title)
  const keyboard = createTwoLinedKeyboard(offers)

  bot.sendMessage(chatId, specialOffersTexts.main_message, {
    reply_markup: {
      keyboard:  [
        [menuButtons.to_main_menu],
      ...keyboard
      ],
      resize_keyboard: true
    }
})

  // onelined menu
  // bot.sendMessage(chatId, 'Вот наши спецпредложения', {
  //   reply_markup: {
  //     keyboard:  Object.values(specialOffersDescription).filter(offer => offer.isActive).map(offer => {
  //       return [{ text: offer.title}] 
  //     })
  //   }
  // })
}

const sendSpecialOfferInfo = (bot, chatId, data) => {
  bot.sendPhoto(chatId, data.image, {
    caption: data.description
  })
}

module.exports = {sendSpecialOffers, sendSpecialOfferInfo}