const User = require('../../db/models/user')
const { setUserState } = require('../mainBot')

const signUp = (bot, chatId) => {
  console.log('мы в сигнап', chatId)

  User.findOne({ chatId: chatId})
    .then(user => {
      if (user.room && user.lastname) {
        bot.sendMessage(chatId, `${user.lastname} ${user.name}, Вы уже зарегистрированны в номере ${user.room}`)
      } else {
        bot.sendMessage(chatId, 'Мы еще не знакомы! Отправьте в чат номер вашей комнаты и фамилию')
      }
    })
  
}

const checkPersonalDetails = () => {

}

module.exports = {signUp, checkPersonalDetails}