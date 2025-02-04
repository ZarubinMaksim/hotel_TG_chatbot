const {restaurantsNameList, restaurantsDescriptions} = require('../texts/restaurantsText')
const restaurantsKeyboards = require('../keyboards/restaurantsKeyboards')

const sendRestaurantsList = (bot, chatId) => {
  bot.sendMessage(chatId, restaurantsNameList, {
    reply_markup: {
      keyboard: [
        ['В главное меню 🔙'],
        ...restaurantsKeyboards.restaurantsListKeyboard
      ],
      resize_keyboard: true
    }
  })
}

const sendRestaurantInfo = (bot, chatId, data) => {
  console.log('thusis', data)
  bot.sendPhoto(chatId, data.image, {
    caption: data.description,
    reply_markup: {
      inline_keyboard: restaurantsKeyboards[`${data.callback}Keyboard`]
    } 
  })
}

module.exports = {sendRestaurantsList, sendRestaurantInfo}