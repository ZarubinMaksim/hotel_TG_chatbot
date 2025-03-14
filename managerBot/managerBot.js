
const User = require('../db/models/user');
const { createLocalUser } = require('../mainBot/components/currentUsers');
let keyRequest 
let changingUser

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

  mainBot.setMyCommands([
    { command: '/start', description: 'Manage guest' },
  ]);

  managerBot.on('callback_query', callbackQuery => {
    const message = callbackQuery.message;
    const chatId = message.chat.id;
    const data = callbackQuery.data; 
    console.log(message, chatId, data)
  
    if (data === 'update_guest_details') {
      managerBot.sendMessage(chatId, message.text, {
        reply_markup: {
          inline_keyboard: [
            [{text: 'Update lastname', callback_data: 'update_guest_lastname'}],
            [{text: 'Update name', callback_data: 'update_guest_name'}],
            [{text: 'Update room', callback_data: 'update_guest_room'}],
            [{text: 'Update arrival', callback_data: 'update_guest_arrival'}],
            [{text: 'Update departure', callback_data: 'update_guest_departure'}],
          ]
        }
      })
    } else if (data === 'update_guest_lastname') {
      keyRequest = data
      changingUser = message.text
      console.log(keyRequest)
    }
  
    // Не забудь подтвердить callback, чтобы кнопка перестала "крутиться"
    managerBot.answerCallbackQuery(callbackQuery.id);
  });

  managerBot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    managerBot.sendMessage(chatId, 'this is manager bot')
  });

  // managerBot.onText(/\/manage_guest/, (msg) => {
  //   const chatId = msg.chat.id;
  //   managerBot.sendMessage(chatId, 'lets manage guest details')
  // });

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
        await mainBot.sendMessage(originalChatId, 'Вы успешно зарегистрировались! Для полного доступа нажмите /start')
        
    } else if (msg.text === '/manage_guest') {
      managerBot.sendMessage(chatId, 'Please write room number or guest Last name')
      keyRequest = 'find_user'
    } else if (keyRequest === 'find_user') {
      const userData = msg.text
      User.find({ 
        $or: [{ room: userData}, {lastname: userData}] 
      })
        .then(result => {
          console.log('hhfhfhf', result)
          result.forEach(guestData => {
            managerBot.sendMessage(chatId, `Here are guests i can found: 
            Lastname - ${guestData.lastname}
            Name - ${guestData.name}
            Room - ${guestData.room}
            Arrival date - ${guestData.arrival}
            Departure date - ${guestData.departure}
            Guest ID - ${guestData.chatId}
           `, {
            reply_markup: {
              inline_keyboard: [
                [{ text: 'Update guest', callback_data: 'update_guest_details'}],
                [{ text: 'Check out guest', callback_data: 'main_menu'}],
                [{ text: 'Заполнить форму', switch_inline_query_current_chat: 'Пример текста' }]
              ]
            }
           })
          })

        })
    } else if (keyRequest === 'update_guest_lastname') {
      console.log('hahahah ya tut', msg.text, changingUser)
    } else {
      managerBot.sendMessage(chatId, 'Error. Are you sure you replying message to confirm registration?');
    }
  });

}

module.exports = startManagerBot