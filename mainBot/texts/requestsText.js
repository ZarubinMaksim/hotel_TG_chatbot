const requestDescriptions = {
  hsk: {
    keyRequest: 'hsk',
    managerBotMessage: '🧹⚠️ You have got new request for Housekeeping! ⚠️🧹',
    userMessage: 'Если нужна уборка или нужно принести что-то из косметических принадллежностей, напишите в чат - мы пришлем коллег.'
  },
  eng: {
    keyRequest: 'eng',
    managerBotMessage: '🔧⚠️ You have got new request for Engeeniring! ⚠️🔧',
    userMessage: 'Если что-то не работает, пожалуйста, напишите в чат - мы пришлем специалистов.'
  },
  signIn: {
    keyRequest: 'signIn',
    managerBotMessage: 'Guest wants to sign in! Please reply for this message to confirm. Message shuld be ROOM NUMBER/LAST NAME/FIRST NAME/CHECK IN DATE/CHECK OUT DAY'
  },
  car_rent: {
    keyRequest: 'car_rent',
    managerBotMessage: 'Guest wants to rent a car! Please contact to the guest'
  },
  unidentified: {
    keyRequest: 'unidentified',
    managerBotMessage: 'You have got new message from guest!'
  },
};

module.exports = requestDescriptions;