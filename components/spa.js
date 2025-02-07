const spaKeyboards = require("../keyboards/spaKeyboards")
const menuButtons = require("../texts/menuButtons")
const { spaTexts } = require("../texts/spaTexts")
const spaMainPhoto = 'images/spa/spaMainPhoto.jpeg'

const sendSpaInfo = (bot, chatId) => {
  bot.sendPhoto(chatId, spaMainPhoto, {
    caption: spaTexts.main_message,
    reply_markup: {
      keyboard: spaKeyboards.spaKeyboard,
      resize_keyboard: true, // Опционально: делает клавиатуру компактнее
    }
    // reply_markup: {
    //   inline_keyboard: Object.values(spaDescriptions).map((object) => {
    //     if (object.callback === 'spaMenu') {
    //       return [{ text: object.title, web_app: { url: object.url}}]
    //     } else {
    //       return [{ text: object.title, callback_data: object.callback}]
    //     }
    //   })
    // }
  })
}

const sendSpaDescription = (bot, chatId, data) => {

  if (data.callback === 'spaMenu') {
    bot.sendMessage(chatId, spaTexts.menu, {
      reply_markup: {
        inline_keyboard: [
          [{ text: menuButtons.spa_menu, web_app: { url: data.url }}]
        ]
      }
    })
  } else {
    bot.sendMessage(chatId, data.description)
  }
}

module.exports = {sendSpaInfo, sendSpaDescription}