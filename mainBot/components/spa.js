const { spaKeyboards, spaSubKeyboard } = require("../keyboards/spaKeyboards");
const { errorTexts } = require("../texts/commonTexts");
const menuButtons = require("../texts/menuButtons");
const { spaTexts } = require("../texts/spaTexts");
const spaMainPhoto = 'images/spa/spaMainPhoto.jpeg';

const sendSpaInfo = async (bot, chatId) => {
  try {
    if(
      !spaMainPhoto ||
      !spaTexts ||
      !spaTexts.main_message ||
      !spaKeyboards.spaKeyboard ||
      typeof spaMainPhoto !== 'string' ||
      typeof spaTexts.main_message !== 'string'
    ) {
      throw new Error(errorTexts.invalidData);
    }
    await bot.sendPhoto(chatId, spaMainPhoto, {
      caption: spaTexts.main_message,
      reply_markup: {
        keyboard: spaKeyboards.spaKeyboard,
        resize_keyboard: true, // Опционально: делает клавиатуру компактнее
      },
      parse_mode: "HTML",
    })
  } catch (error) {
    console.error(errorTexts.consoleMsgSpaInfo, error);
    await bot.sendMessage(chatId, errorTexts.userTryAgainMsg);
  }
};

const sendSpaOffer = async (bot, chatId, data) => {
  try {
    if(
      !data ||
      !Array.isArray(data.images) ||
      data.images.length === 0 ||
      !data.description ||
      typeof data.description !== 'string'
    ) {
      throw new Error(errorTexts.invalidData);
    };

    await bot.sendMediaGroup(chatId, data.images);
    await bot.sendMessage(chatId, data.description);
  } catch (error) {
    console.error(errorTexts.consoleMsgSpaInfo, error);
    await bot.sendMessage(chatId, errorTexts.userTryAgainMsg);
  }
};

const sendSpaDescription = async (bot, chatId, data) => {
  try {
    if(
      !data ||
      !data.callback ||
      typeof data.callback !== 'string' ||
      !spaTexts ||
      !spaTexts.menu ||
      typeof spaTexts.menu !== 'string' ||
      !menuButtons.spa_menu ||
      !data.url ||
      !data.description ||
      typeof data.description !== 'string'
    ) {
      throw new Error(errorTexts.invalidData);
    }

    if (data.callback === 'spaMenu') {
      await bot.sendMessage(chatId, spaTexts.menu, {
        reply_markup: {
          inline_keyboard: [
            [{ text: menuButtons.spa_menu, web_app: { url: data.url }}]
          ]
        },
      });
    } else if (data.callback === 'spaOffers') {
      await bot.sendChatAction(chatId, 'typing');
      await bot.sendMessage(chatId, 'Вот наши акции', {
        reply_markup: {
          keyboard: spaSubKeyboard(data)
        }
      })
    } else {
      await bot.sendMessage(chatId, data.description, {
        parse_mode: "HTML",
      });
    }
  } catch (error) {
    console.error(errorTexts.consoleMsgSpaInfo, error);
    await bot.sendMessage(chatId, errorTexts.userTryAgainMsg);
  }
};

module.exports = { sendSpaInfo, sendSpaDescription, sendSpaOffer };