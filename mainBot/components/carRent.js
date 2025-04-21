const sendCarRent = (mainBot, chatId) => {
  mainBot.sendMessage(chatId, `<b>🛻 Аренда автомобиля или байка — легко!</b>

Укажите, пожалуйста:

📞 ваш номер телефона
🚙 тип транспорта
📅 даты аренды

— и мы всё оформим для вас в пару кликов.`, {
    parse_mode: "HTML"
  })
}

module.exports = sendCarRent