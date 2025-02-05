const servicesDescriptions = require("../texts/servicesText")
const requestDescriptions = require("../texts/requestsText")

const handleManagerBotMessage = (msg, keyRequest) => {

  const description = servicesDescriptions[keyRequest] || requestDescriptions[keyRequest]

  const messageData = `${description.managerBotMessage} 
  Guest Telegram ID - @${msg.from.username},
  Guest Name - ${msg.from.first_name}
  Message - ${msg.text}`
    return messageData
} 

module.exports = handleManagerBotMessage