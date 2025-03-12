

async function setMessageReaction(token, chatId, messageId, emoji) {
  await fetch(`https://api.telegram.org/bot${token}/setMessageReaction`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
          chat_id: chatId,
          message_id: messageId,
          reaction: [{ type: "emoji", emoji: emoji }]
      })
  });
}

const startManagerBot = (mainBot, managerBot, token) => {

  managerBot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    managerBot.sendMessage(chatId, 'this is manager bot')
  });

  managerBot.on('message', async (msg) => {

    const chatId = msg.chat.id;
  
    if (msg.reply_to_message) { 
        const originalChatId = msg.reply_to_message.text.split('ChatID - ')[1]?.trim()
        await setMessageReaction(token, chatId, msg.reply_to_message.message_id, '👍');
        await mainBot.sendMessage(originalChatId, 'Вы успешно зарегистрировались')
        console.log('msg', msg.text)
        // await checkPersonalDetails()
        
    } else {
        // console.log(chatId);
        managerBot.sendMessage(chatId, 'Error. Are you sure you replying message to confirm registration?');
    }
  });

}

module.exports = startManagerBot