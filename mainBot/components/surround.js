const { surroundingsKeyboards, surroundingsSubKeyboard } = require("../keyboards/surroundingsKeyboards")
const menuButtons = require("../texts/menuButtons")
const { surroundingsDescriptions, surroundingsTexts } = require("../texts/surroundText")
const { createTwoLinedKeyboard } = require("./commomFunctions")

const sendSurroundingsList = (bot, chatId) => {

  bot.sendMessage(chatId, surroundingsTexts.main_message, {
    reply_markup: {
      keyboard: surroundingsKeyboards.surroundingsKeyboard,
      resize_keyboard: true
    }
  })
} 

const sendSurrounding =  async (bot, chatId, data) => {

  bot.sendMessage(chatId, surroundingsTexts.sub_main_message,{ 
    reply_markup: {
      keyboard: surroundingsSubKeyboard(data)
    }
  })
}

const sendExactSurrounding = async (bot, chatId, data) => {
  try {
    await bot.sendMediaGroup(chatId, data.images)
    await bot.sendMessage(chatId, data.description)
    await bot.sendLocation(chatId, data.latitude, data.longtitude)
  } 
  catch (error) {
    console.log(error)
  }
}

module.exports = {sendSurroundingsList, sendSurrounding, sendExactSurrounding}