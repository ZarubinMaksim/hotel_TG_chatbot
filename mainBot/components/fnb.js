const {restaurantsNameList} = require('../texts/restaurantsText')
const restaurantsKeyboards = require('../keyboards/restaurantsKeyboards')
const menuButtons = require('../texts/menuButtons')

const sendRestaurantsList = (bot, chatId) => {

  bot.sendMessage(chatId, restaurantsNameList, {
    reply_markup: {
      keyboard: [
        ...restaurantsKeyboards.restaurantsListKeyboard
      ],
      resize_keyboard: true
    }
  })
}

const sendRestaurantInfo = async (bot, chatId, data) => {
  try {
    await bot.sendMediaGroup(chatId, data.images)
    await bot.sendMessage(chatId, data.description, {
      reply_markup: {
        inline_keyboard: restaurantsKeyboards[`${data.callback}Keyboard`]
      }
    })
  } catch (error) {
    console.log(error)
  }
}

module.exports = {sendRestaurantsList, sendRestaurantInfo}