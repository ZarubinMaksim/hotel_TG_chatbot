const {servicesDescription} = require("../../mainBot/texts/servicesText")
const requestDescriptions = require("../../mainBot/texts/requestsText")

const handleManagerBotMessage = (msg, guestDetails, keyRequest) => {
console.log(guestDetails)
  const description = servicesDescription[keyRequest] || requestDescriptions[keyRequest]
  const messageTitle = description?.managerBotMessage || ''
  const guestInfo = `
  ChatId - ${guestDetails.chatId}
  Guest name - ${guestDetails.lastname} ${guestDetails.name}
  Room - ${guestDetails.room}
  Arrival - ${guestDetails.arrival} 
  Departure - ${guestDetails.departure}
  `
  const guestRequest = `Request - ${msg.text}`
  
  const messageData = `
  ${messageTitle} 
  ${guestInfo}
  ${guestRequest}
  `
  
    return messageData
} 

module.exports = handleManagerBotMessage