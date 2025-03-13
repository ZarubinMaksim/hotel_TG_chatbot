
const User = require('../db/models/user');
const { createLocalUser } = require('../mainBot/components/currentUsers');

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
        const guestDetails = msg.text.split('/')

        User.findOne({chatId: originalChatId})
          .then(user => {
            if (user) {
              User.findByIdAndUpdate(user._id,
                {
                lastname: guestDetails[1],
                name: guestDetails[2],
                room: guestDetails[0],
                arrival: guestDetails[3],
                departure: guestDetails[4]
              }, 
              { new: true })
              .then(updatedUser => {
                createLocalUser(updatedUser)
              })
            } else {
              console.log('Пользователь не найден')
              return
            }
          })
        await setMessageReaction(token, chatId, msg.reply_to_message.message_id, '👍');
        await mainBot.sendMessage(originalChatId, 'Вы успешно зарегистрировались')
        // await checkPersonalDetails()
        
    } else {
        // console.log(chatId);
        managerBot.sendMessage(chatId, 'Error. Are you sure you replying message to confirm registration?');
    }
  });

}

module.exports = startManagerBot