const { servicesDescription } = require("../../mainBot/texts/servicesText");
const requestDescriptions = require("../../mainBot/texts/requestsText");

const handleManagerBotMessage = (msg, guestDetails, keyRequest) => {
  console.log('handle data', msg, guestDetails, keyRequest)
  const description = servicesDescription[keyRequest] || requestDescriptions[keyRequest] || {};
  
  if (!description) {
    console.error(`No description found for keyRequest: ${keyRequest}`);
  }

  const messageTitle = description?.managerBotMessage || '';
  const guestInfo = guestDetails ? `
  🆔 ChatId - ${guestDetails.chatId}
👤 Guest name - ${guestDetails.lastname} ${guestDetails.name}
🚪 Room - ${guestDetails.room}
🛬 Arrival - ${guestDetails.arrival} 
🛫 Departure - ${guestDetails.departure}
  ` : 'Guest details are not available';

  const guestRequest = msg.text && description ? `Request - ${msg.text}` : '';
  
  const messageData = `
  ${messageTitle} 
  ${guestInfo}
  ${guestRequest}
  `;
  
  return messageData;
};

module.exports = handleManagerBotMessage;