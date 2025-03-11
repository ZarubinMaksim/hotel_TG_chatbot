const signUp = (bot, chatId) => {
  console.log('мы в сигнап', chatId)
  
  bot.sendMessage(chatId, 'Мы еще не знакомы! Отправьте в чат номер вашей комнаты и фамилию')
}

const checkPersonalDetails = () => {

}

module.exports = {signUp, checkPersonalDetails}