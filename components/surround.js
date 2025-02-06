const menuButtons = require("../texts/menuButtons")
const { surroundingsDescriptions, surroundingsTexts } = require("../texts/surroundText")
const { createTwoLinedKeyboard } = require("./commomFunctions")

const sendSurroundingsList = (bot, chatId) => {

  const surroundings = Object.values(surroundingsDescriptions).map(surrounding => surrounding.title)
  const keyboard = createTwoLinedKeyboard(surroundings)
  console.log(keyboard)
  bot.sendMessage(chatId, surroundingsTexts.main_message, {
    reply_markup: {
      keyboard: [
        [menuButtons.to_main_menu],
        ...keyboard
      ],
      resize_keyboard: true
    }
  })
} 

const sendSurrounding =  async (bot, chatId, data) => {
  // data.items.map(item => console.log('eto item', item))
  // console.log(surroundingsDescriptions[data].items)
  bot.sendMessage(chatId, surroundingsTexts.sub_main_message,{ 
    reply_markup: {
      keyboard: [
        [menuButtons.back],
        ...Object.values(data.items).map(item => [item.title])
      ]
    }
  })


  // try {
  //   await bot.sendPhoto(chatId, surroundingsDescriptions[data].image, {
  //     caption: surroundingsDescriptions[data].description
  //   })
  //   await bot.sendLocation(chatId, surroundingsDescriptions[data].latitude, surroundingsDescriptions[data].longtitude)
  // }
  // catch (error) { 
  //   console.log(error)
  // }
}

const sendExactSurrounding = async (bot, chatId, data) => {
  try {
    await bot.sendPhoto(chatId, data.image, {
      caption: data.description
    })
    await bot.sendLocation(chatId, data.latitude, data.longtitude)
  } 
  catch (error) {
    console.log(error)
  }
}

module.exports = {sendSurroundingsList, sendSurrounding, sendExactSurrounding}