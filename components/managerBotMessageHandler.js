const servicesDescription = require("../texts/servicesText")

const handleManagerBotMessage = (msg, keyRequest) => {
  const messageData = `${servicesDescription[keyRequest].managerBotMessage} 
  Guest Telegram ID - @${msg.from.username},
  Guest Name - ${msg.from.first_name}
  Message - ${msg.text}`
    return messageData
}

module.exports = handleManagerBotMessage