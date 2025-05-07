const { errorTexts } = require("../../mainBot/texts/commonTexts");
const managerBotDescriptions = require("../texts/managerBotDescriptions");

const setMessageReaction = async (token, chatId, messageId, emoji) => {
  try{
    if (!token || !chatId || !messageId || !emoji) {
      throw new Error(errorTexts.invalidData);
    }
    await fetch(`https://api.telegram.org/bot${token}/setMessageReaction`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
          chat_id: chatId,
          message_id: messageId,
          reaction: [{ type: "emoji", emoji: emoji }]
      })
  });
  } catch(error) {
    console.error(managerBotDescriptions.errorMessage_setReaction, error);
  }
};

module.exports = setMessageReaction;