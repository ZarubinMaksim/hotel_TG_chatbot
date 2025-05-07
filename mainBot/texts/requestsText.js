const { keyRequests } = require("../config/appItems");

const requestDescriptions = {
  housekeeping: {
    keyRequest: keyRequests.housekeeping,
    managerBotMessage: '🧹⚠️ You have got new request for Housekeeping! ⚠️🧹',
    userMessage: 'Если нужна уборка или нужно принести что-то из косметических принадллежностей, напишите в чат - мы пришлем коллег.',
    userReplyMsg: 'Горничная скоро будет у вас в номере ✅'
  },
  engineer: {
    keyRequest: keyRequests.engineer,
    managerBotMessage: '🔧⚠️ You have got new request for Engeeniring! ⚠️🔧',
    userMessage: 'Если что-то не работает, пожалуйста, напишите в чат - мы пришлем специалистов.',
    userReplyMsg: 'Инженер скоро будет у вас в номере ✅'
  },
  sign_in: {
    keyRequest: keyRequests.sign_in,
    managerBotMessage: 'Guest wants to sign in! Please reply for this message to confirm. Message shuld be ROOM NUMBER/LAST NAME/FIRST NAME/CHECK IN DATE/CHECK OUT DAY',
    userReplyMsg: 'Инженер скоро будет у вас в номере ✅',
  },
  car_rent: {
    keyRequest: keyRequests.car_rent,
    managerBotMessage: 'Guest wants to rent a car! Please contact to the guest',
    userReplyMsg: 'Мы свяжемся с вами чтобы подтвердить заказ ✅'

  },
  unidentified: {
    keyRequest: keyRequests.unidentified,
    managerBotMessage: 'You have got new message from guest!',
    userReplyMsg: 'Мы уже работаем над вашим вопросом ✅'
  },
};

module.exports = requestDescriptions;