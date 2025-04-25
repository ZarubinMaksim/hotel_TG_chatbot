const { errorTexts } = require("../texts/commonTexts");
const weeklyGroupDeskription = require("../texts/weeklyGroup");

const sendWeeklyGroup = async (bot, chatId) => {
  try {
    if (
      !weeklyGroupDeskription ||
      !weeklyGroupDeskription.text ||
      typeof weeklyGroupDeskription.text !== 'string' ||
      !Array.isArray(weeklyGroupDeskription.images) ||
      weeklyGroupDeskription.images.length === 0
    ) {
      throw new Error(errorTexts.invalidData);
    }
    await bot.sendMessage(chatId, weeklyGroupDeskription.text)
    await bot.sendMediaGroup(chatId, weeklyGroupDeskription.images)
  } catch (error) {
    console.error(errorTexts.consoleMsgWeeklyActivities, error);
    await bot.sendMessage(chatId, errorTexts.userTryAgainMsg);
  }
};

module.exports = sendWeeklyGroup;