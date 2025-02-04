const { surroundingsDescriptions } = require("../texts/surroundText")
const { createTwoLinedKeyboard } = require("./commomFunctions")

const sendSurroundingsList = (bot, chatId) => {

  const surroundings = Object.values(surroundingsDescriptions).map(surrounding => surrounding.title)
  const keyboard = createTwoLinedKeyboard(surroundings)
  console.log(keyboard)
  bot.sendMessage(chatId, 'Test surroundings', {
    reply_markup: {
      keyboard: [
        ['В главное меню 🔙'],
        ...keyboard
      ],
      resize_keyboard: true
    }
  })
} 

const sendSurrounding =  async (bot, chatId, data) => {
  console.log('data', data)
  // data.items.map(item => console.log('eto item', item))
  // console.log(surroundingsDescriptions[data].items)
  bot.sendMessage(chatId, 'Вот что мы можем предложить',{ 
    reply_markup: {
      keyboard: [
        ['Назад к выбору 🔙'],
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