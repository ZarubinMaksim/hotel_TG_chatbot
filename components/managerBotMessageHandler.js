const {servicesDescription} = require("../texts/servicesText")
const requestDescriptions = require("../texts/requestsText")

const handleManagerBotMessage = (msg, keyRequest, chatId) => {
  console.log('мы в хендлмессадж', msg, keyRequest, chatId)

  const description = servicesDescription[keyRequest] || requestDescriptions[keyRequest]

  const messageData = `${description.managerBotMessage} 
  Telegram ID - @${msg.from.username},
  Telegram Name - ${msg.from.first_name}
  Guest details - ${msg.text}
  ChatID - ${chatId}`
    return messageData
} 

module.exports = handleManagerBotMessage