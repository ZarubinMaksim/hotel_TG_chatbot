const spaKeyboards = require("../keyboards/spaKeyboards")
const menuButtons = require("../texts/menuButtons")
const { spaTexts } = require("../texts/spaTexts")
const { sendWithLoading } = require("./commomFunctions")
const spaMainPhoto = 'images/spa/spaMainPhoto.jpeg'

const sendSpaInfo = (bot, chatId) => {
  bot.sendPhoto(chatId, spaMainPhoto, {
    caption: spaTexts.main_message,
    reply_markup: {
      keyboard: spaKeyboards.spaKeyboard,
      resize_keyboard: true, // Опционально: делает клавиатуру компактнее
    }
  })
}


const sendSpaDescription = async (bot, chatId, data) => {
  try {
    if (data.callback === 'spaMenu') {
      bot.sendMessage(chatId, spaTexts.menu, {
        reply_markup: {
          inline_keyboard: [
            [{ text: menuButtons.spa_menu, web_app: { url: data.url }}]
          ]
        }
      })
    } else if (data.callback === 'spaOffers') {
      const activeOffers = Object.values(data.offers).filter(offer => offer.isActive).map(offer => offer.images).flat()
      await bot.sendChatAction(chatId, 'typing')
      await bot.sendMessage(chatId, data.description)
      await bot.sendMediaGroup(chatId, activeOffers)
    } else {
      bot.sendMessage(chatId, data.description)
    }
  } catch (error) {
    console.log(error)
  }
  
}

module.exports = {sendSpaInfo, sendSpaDescription}