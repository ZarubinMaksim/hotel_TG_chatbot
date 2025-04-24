//rewieved on 24.04
const { errorTexts } = require("../texts/commonTexts");
const { infrastructureMainText, infrastructureDescriptions } = require("../texts/infrastructureTexts");
const menuButtons = require("../texts/menuButtons");
const { createTwoLinedKeyboard } = require("./commomFunctions");

const sendInfrastructureList = async (bot, chatId) => {
  const infrastructures = Object.values(infrastructureDescriptions)
    .filter(infrastructure => infrastructure.isActive)
    .map(infrastructure => infrastructure.title);

  const keyboard = createTwoLinedKeyboard(infrastructures);

  try {
    if (
      typeof infrastructureMainText !== 'string' ||
      keyboard.length === 0 ||
      !Array.isArray(keyboard)
    ) {
      throw new Error(errorTexts.invalidData)
    }

    await bot.sendMessage(chatId, infrastructureMainText, {
      reply_markup: {
        keyboard: [
          [menuButtons.to_main_menu],
          ...keyboard
        ],
        resize_keyboard: true,
      }
    });
  } catch (error) {
    console.error(errorTexts.consoleMsgInfrastructuresList, error);
    await bot.sendMessage(chatId, errorTexts.userTryAgainMsg);
  }
};

const sendInfrastructureInfo = async (bot, chatId, data) => {
  try {
    if (
      !data ||
      !Array.isArray(data.images) ||
      data.images.length === 0 ||
      typeof data.description !== 'string'
    ) {
      throw new Error(errorTexts.invalidData);
    }

    await bot.sendMediaGroup(chatId, data.images);
    await bot.sendMessage(chatId, data.description, {
      parse_mode: "HTML",
    });
  } catch (error) {
    console.error(errorTexts.consoleMsgInfrastructureInfo, error);
    await bot.sendMessage(chatId, errorTexts.userTryAgainMsg);
  }
};

module.exports = { sendInfrastructureList, sendInfrastructureInfo };