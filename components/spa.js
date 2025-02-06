const menuButtons = require("../texts/menuButtons")
const { spaDescriptions, spaTexts } = require("../texts/spaTexts")
const { createOneLinedKeyboard } = require("./commomFunctions")

const spaMainPhoto = 'images/spa/spaMainPhoto.jpeg'
const spaInfo = Object.values(spaDescriptions).map(spaDescription => spaDescription.title)
const keyboard = createOneLinedKeyboard(spaInfo)

const sendSpaInfo = (bot, chatId) => {
  bot.sendPhoto(chatId, spaMainPhoto, {
    caption: spaTexts.main_message,
    reply_markup: {
      keyboard: [
        [menuButtons.to_main_menu],
        ...keyboard
      //   ...Object.values(spaDescriptions).map((object) => {
      //   return [{ text: object.title }];
      // })
    ],
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