const { infrastructureMainText, infrastructureDescriptions } = require("../texts/infrastructureTexts")
const {createTwoLinedKeyboard} = require("./commomFunctions")

const sendInfrastructureList = (bot, chatId) => {
  const infrastructures = Object.values(infrastructureDescriptions).filter(infrastructure => infrastructure.isActive).map(infrastructure => infrastructure.title)
  const keyboard = createTwoLinedKeyboard(infrastructures)

  bot.sendMessage(chatId, infrastructureMainText, {
    reply_markup: {
      keyboard: [
        ['В главное меню 🔙'],
        ...keyboard
      ],
      resize_keyboard: true
    }
  })

  //****one-lined keyboard
  // bot.sendMessage(chatId, infrastructureMainText, {
  //   reply_markup: {
  //     keyboard: Object.values(infrastructureDescriptions).map((object) => {
  //       return [{ text: object.title}]
  //     })
  //   }
  // })
}

const sendInfrastructureInfo = (bot, chatId, data) => {
  bot.sendPhoto(chatId, data.image, {
    caption: data.description,
    // reply_markup: {
    //   inline_keyboard: [
    //     [{ text: 'Назад', callback_data: 'back'}]
    //   ]
    // }
  })
}

module.exports = {sendInfrastructureList, sendInfrastructureInfo}