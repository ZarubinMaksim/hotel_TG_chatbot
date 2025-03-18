
const User = require('../db/models/user');
const { createLocalUser } = require('../mainBot/components/currentUsers');
const handleManagerBotMessage = require('./components/managerBotMessageHandler');
const { profileMainMenu, updateProfileMenu } = require('./keyboards/managerBotKeyboards');
const managerBotDescriptions = require('./texts/managerBotDescriptions');
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

const setRequestUserAndSendMsg = (chatId, managerBot, callback_data, userData, option) => {
  keyRequest = callback_data
  changingUser = userData
  managerBot.sendMessage(chatId, `Now please send new ${option}`)
}

const updateGuestDetails = (chatId, managerBot, changingData, msg, keyRequest ) => {
  const guestId = changingUser.split('\n')[0].split(' - ')[1]
  const guestRoom = changingUser.split('\n')[2].split(' - ')[1]
  User.findOneAndUpdate({ chatId: guestId, room: guestRoom}, { $set: {[changingData]: msg.text}}, {new:true})
  .then(user => {
    managerBot.sendMessage(chatId, handleManagerBotMessage(chatId, user, keyRequest), {
      reply_markup: {
        inline_keyboard: updateProfileMenu
      }
    })
    createLocalUser(user)
  })
}

const findGuest = (chatId, managerBot, msg) => {
  const searchingData = msg.text
  User.find({ 
    $or: [{ room: searchingData}, {lastname: searchingData}] 
  })
    .then(guests => {
      managerBot.sendMessage(chatId, managerBotDescriptions.findGuestsResult)
      guests.forEach(guest => {
        const guestDetails = handleManagerBotMessage(msg, guest, keyRequest)
        managerBot.sendMessage(chatId, guestDetails, {
        reply_markup: {
          inline_keyboard: profileMainMenu
        }
       })
      })

    })
}



const startManagerBot = (mainBot, managerBot, token) => {

  mainBot.setMyCommands([
    { command: '/start', description: 'Manage guest' },
  ]);

  managerBot.on('callback_query', callbackQuery => {
    const message = callbackQuery.message;
    const chatId = message.chat.id;
    const keyRequest = callbackQuery.data; 
  
    if (keyRequest === 'update_guest_details') {
      managerBot.sendMessage(chatId, message.text, {
        reply_markup: {
          inline_keyboard: updateProfileMenu
        }
      })
      // здесь обрабатываем колбеки на обновление фамилии/имени/комнаты/тд
      //если data === колбеку из updateProfileMenu то выполняем функцию где обновляем киреквест и бзера и отправляем в менеджер бот
    } else if (updateProfileMenu.map(item => item[0].callback_data).includes(keyRequest)) {
        setRequestUserAndSendMsg(chatId, managerBot, keyRequest, message.text, keyRequest.split('_')[2])
    } 
  
    // Не забудь подтвердить callback, чтобы кнопка перестала "крутиться"
    managerBot.answerCallbackQuery(callbackQuery.id);
  });

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
        await mainBot.sendMessage(originalChatId, 'Вы успешно зарегистрировались! Для полного доступа нажмите /start')
        
    } else if (msg.text === '/manage_guest') {
      managerBot.sendMessage(chatId, 'Please write room number or guest Last name')
      keyRequest = 'find_user'
    } else if (keyRequest === 'find_user') {
      findGuest(chatId, managerBot, msg)
    } else if (updateProfileMenu.map(item => item[0].callback_data).includes(keyRequest)) {
      updateGuestDetails(chatId, managerBot, keyRequest.split('_')[2], msg, keyRequest )
    } else {
      managerBot.sendMessage(chatId, 'Error. Are you sure you replying message to confirm registration?');
    }
  });

}

module.exports = startManagerBot