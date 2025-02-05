const descriptions = require("../texts/servicesAndRequestsText")

const handleManagerBotMessage = (msg, keyRequest) => {
  const messageData = `${descriptions[keyRequest].managerBotMessage} 
  Guest Telegram ID - @${msg.from.username},
  Guest Name - ${msg.from.first_name}
  Message - ${msg.text}`
    return messageData
}

module.exports = handleManagerBotMessage