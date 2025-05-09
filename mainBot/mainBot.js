const { submitReview } = require('./components/review');
const sendPromotion = require('./components/sendPromotion');
const managerChatId = process.env.MANAGERBOT_CHAT_ID
const { userStates, setKeyRequest, getKeyRequest } = require('./components/currentUsers');
const { regexHandlers, replyMap } = require('./components/handleComponents');
const requestDescriptions = require('./texts/requestsText');
const { handleFollowingRequest } = require('./components/commomFunctions');
const { keyRequests } = require('./config/appItems');


const startMainBot = (mainBot, managerBot) => {
  mainBot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;
    const guestDetails = userStates[chatId];
    let matched = false;
    sendPromotion(chatId);
    

    for (const { regex, action } of regexHandlers) {
      if (regex.test(text)) {
        await action(mainBot, chatId, msg, guestDetails);
        matched = true;
        break;
      } 
    };

    if (!matched) {
      const keyRequest = getKeyRequest(chatId);
      const guestDetails = userStates[chatId];

      if (keyRequest === keyRequests.leave_review) {
        submitReview(mainBot, managerBot, chatId, msg);
        setKeyRequest(chatId, '');
      } else {
        const replyMsg = replyMap[keyRequest] ?? requestDescriptions.unidentified.userReplyMsg;
        handleFollowingRequest(mainBot, managerBot, chatId, msg, guestDetails, keyRequest, managerChatId, replyMsg);
      }
    }
  })
};

module.exports = { startMainBot };