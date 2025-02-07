const { infrastructureMainText, infrastructureDescriptions } = require("../texts/infrastructureTexts")
const menuButtons = require("../texts/menuButtons")
const {createTwoLinedKeyboard} = require("./commomFunctions")

const sendInfrastructureList = (bot, chatId) => {
  const infrastructures = Object.values(infrastructureDescriptions).filter(infrastructure => infrastructure.isActive).map(infrastructure => infrastructure.title)
  console.log(infrastructures)
  const keyboard = createTwoLinedKeyboard(infrastructures)

  bot.sendMessage(chatId, infrastructureMainText, {
    reply_markup: {
      keyboard: [
        [menuButtons.to_main_menu],
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

const sendInfrastructureInfo = async(bot, chatId, data) => {
  try {
    await bot.sendMediaGroup(chatId, data.images)
    await bot.sendMessage(chatId, data.description)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {sendInfrastructureList, sendInfrastructureInfo}