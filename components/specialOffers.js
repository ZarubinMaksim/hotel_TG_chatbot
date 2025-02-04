const specialOffersDescription = require('../texts/specialOffersText')
const {createTwoLinedKeyboard} = require('./commomFunctions')

const sendSpecialOffers = (bot, chatId) => {
  // two-lined menu
  const offers = Object.values(specialOffersDescription)
  .filter(offer => offer.isActive)
  .map(offer => offer.title)
  const keyboard = createTwoLinedKeyboard(offers)

  bot.sendMessage(chatId, 'Ловите лучшие предложения! 🎉 Вот список актуальных акций:', {
    reply_markup: {
      keyboard:  [
        ['В главное меню 🔙'],
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