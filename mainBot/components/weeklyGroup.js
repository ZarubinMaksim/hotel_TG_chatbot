const weeklyGroupDeskription = require("../texts/weeklyGroup")

const sendWeeklyGroup = async (mainBot, chatId) => {
  await mainBot.sendMessage(chatId, weeklyGroupDeskription.text)
  await mainBot.sendMediaGroup(chatId, weeklyGroupDeskription.images)
}

module.exports = sendWeeklyGroup