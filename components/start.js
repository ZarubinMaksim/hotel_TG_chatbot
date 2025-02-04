
const sendMainMenu = (bot, chatId) => {
  bot.sendMessage(chatId, "Наши услуги", {
    reply_markup: {
      keyboard: [
        ['🏨 Об Отеле', '🛏 Наши номера'],
        ['🛠 Что-то не работает', '🧹 Нужна уборка'],
        ['📋 Услуги', '🍜 Рестораны и меню'],
        ['🎉 Спецпредложения', '🏋🏼‍♂️ Инфраструктура'],
        ['💆🏼‍♀️ Спа', '📍 Геолокация'],
        ['🙏 Оставить отзыв', '🚶🏼‍♂️ Что рядом'],
        ['❌ Закрыть меню', 'Register']
    ],
    resize_keyboard: true,
    one_time_keyboard: false
    } 
  });
}
module.exports = sendMainMenu