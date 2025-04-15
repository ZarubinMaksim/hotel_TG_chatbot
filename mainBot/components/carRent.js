const sendCarRent = (mainBot, chatId) => {
  mainBot.sendMessage(chatId, 'Если хотите взять машину в аренду, пожалуйста напишите ваш контактный телефон, тип транспорта и желаемые даты')
}

module.exports = sendCarRent