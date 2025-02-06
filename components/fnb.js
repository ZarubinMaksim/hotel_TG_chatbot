const {restaurantsNameList, restaurantsDescriptions} = require('../texts/restaurantsText')
const restaurantsKeyboards = require('../keyboards/restaurantsKeyboards')
const menuButtons = require('../texts/menuButtons')

const sendRestaurantsList = (bot, chatId) => {
  bot.sendMessage(chatId, restaurantsNameList, {
    reply_markup: {
      keyboard: [
        [menuButtons.to_main_menu],
        ...restaurantsKeyboards.restaurantsListKeyboard
      ],
      resize_keyboard: true
    }
  })
}

const sendRestaurantInfo = (bot, chatId, data) => {
  bot.sendPhoto(chatId, data.image, {
    caption: data.description,
    reply_markup: {
      inline_keyboard: restaurantsKeyboards[`${data.callback}Keyboard`]
    } 
  })
}

module.exports = {sendRestaurantsList, sendRestaurantInfo}