
const { userStates } = require('./currentUsers')

const checkIfRegistered = (bot, chatId) => {

  if (userStates[chatId].room == '') {
    bot.sendMessage(chatId, 'Если вы уже в отеле, то отправьте в чат номер вашей комнаты и фамилию')
  } else {
    bot.sendMessage(chatId, `${userStates[chatId].lastname} ${userStates[chatId].name}, Вы уже зарегистрированны в номере ${userStates[chatId].room}`)
  }
}



const checkPersonalDetails = () => {

}

module.exports = {checkIfRegistered, checkPersonalDetails}