const { servicesDescription } = require("../../mainBot/texts/servicesText");
const requestDescriptions = require("../../mainBot/texts/requestsText");
const errorMessages = require("../texts/errorMessages");
const managerBotDescriptions = require("../texts/managerBotDescriptions");

const handleManagerBotMessage = (msg, guestDetails, keyRequest) => {
  const description = servicesDescription[keyRequest] || requestDescriptions[keyRequest] || {};
  
  if (!description) {
    console.error(`${errorMessages.noDescription} ${keyRequest}`);
  }

  const messageTitle = description?.managerBotMessage || '';
  const guestInfo = guestDetails ? `
  ${managerBotDescriptions.chatId} ${guestDetails.chatId}
${managerBotDescriptions.guestName} ${guestDetails.lastname} ${guestDetails.name}
${managerBotDescriptions.room} ${guestDetails.room}
${managerBotDescriptions.arrival} ${guestDetails.arrival} 
${managerBotDescriptions.departure} ${guestDetails.departure}
  ` : errorMessages.noGuestDetails;

  const guestRequest = msg.text && description ? `Request - ${msg.text}` : '';
  
  const messageData = `
  ${messageTitle} 
  ${guestInfo}
  ${guestRequest}
  `;
  
  return messageData;
};

module.exports = handleManagerBotMessage;