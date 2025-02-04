const sendHotelLocation = (bot, chatId) => {
  bot.sendMessage(chatId, 'Наш адрес: 149 Moo 6 Cherngtalay, Thalang District, Phuket 83110')
  bot.sendLocation(chatId, 8.028443, 98.295394, {
    // reply_markup: {
    //   keyboard: [
    //     ['В главное меню 🔙']
    //   ],
    //   resize_keyboard: true
    // }
  })
}

module.exports = sendHotelLocation