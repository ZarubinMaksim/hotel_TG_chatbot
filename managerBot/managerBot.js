
const { updateGuestDetailsDB, findGuestDB, registerGuestDB } = require('../db/controllers/guest');
const User = require('../db/models/user');
const { createLocalUser, checkOutGuest, userStates } = require('../mainBot/components/currentUsers');
const handleManagerBotMessage = require('./components/managerBotMessageHandler');
const { profileMainMenu, updateProfileMenu, deleteGuestMenu, checkoutAllGuests } = require('./keyboards/managerBotKeyboards');
const managerBotDescriptions = require('./texts/managerBotDescriptions');
let keyRequest 
let changingUser
const allowedUsers = [317138824]


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

const setRequestUserAndSendMsg = (chatId, managerBot, callback_data, userData) => {
  keyRequest = callback_data
  changingUser = userData
  changeField = keyRequest.split('_').pop()
  managerBot.sendMessage(chatId, `${managerBotDescriptions.sendNewInfo} ${changeField}`)
}

const updateGuestDetails = (chatId, managerBot, changingData, msg, keyRequest ) => {
  const guestId = changingUser.split('\n')[0].split(' - ')[1]
  const guestRoom = changingUser.split('\n')[2].split(' - ')[1]
  updateGuestDetailsDB(chatId, managerBot, guestId, guestRoom, changingData, msg, keyRequest)
}

const findGuest = (chatId, managerBot, msg) => {
  const searchingData = msg.text
  findGuestDB(chatId, managerBot, searchingData, msg, keyRequest)
}

const setRequestAndSendDeleteConfirmation = (chatId, managerBot, callback_data, userData) => {
  keyRequest = callback_data
  changingUser = userData
  managerBot.sendMessage(chatId, 'Please confirm you would like to check out guest', {
    reply_markup: {
      inline_keyboard: deleteGuestMenu
    }
  })
}



const startManagerBot = (mainBot, managerBot, token) => {

  // mainBot.setMyCommands([
  //   { command: '/start', description: 'Manage guest' },
  // ]);

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
      setRequestUserAndSendMsg(chatId, managerBot, keyRequest, message.text)
    } else if(keyRequest === 'request_delete-guest') {
      setRequestAndSendDeleteConfirmation(chatId, managerBot, keyRequest, message.text)
    } else if(keyRequest === 'delete_guest') {
      const guestId = changingUser.split('\n')[0].split(' - ')[1]

      User.findOneAndDelete({chatId: guestId})
        .then(user => {
          if (user) {
            checkOutGuest(guestId)
            managerBot.sendMessage(chatId, `${user.lastname} ${user.name} from room ${user.room} checked out`)
          } else {
            console.log('error')
          }
        })
    } else if (keyRequest === 'confirm_checkout_all') {
      managerBot.sendMessage(chatId, 'Confirmed')
      User.deleteMany({departure: '25-02-2025'}) //тут нужно будет создать сегодняшнее число
      .then(result => console.log('dddd', result))
    }
  
    // Не забудь подтвердить callback, чтобы кнопка перестала "крутиться"
    managerBot.answerCallbackQuery(callbackQuery.id);
  });

  managerBot.on('message', async (msg) => {

    const chatId = msg.chat.id;
    if (!allowedUsers.includes(chatId)) {
      managerBot.sendMessage(chatId, 'You are not allowed to use this bot')
      return
    }
    if (msg.reply_to_message) { 
      const originalChatId = msg.reply_to_message.text.split('ChatId - ')[1].split('\n')[0]
      const guestDetails = msg.text.split('/')
      await registerGuestDB(originalChatId, guestDetails)
      await setMessageReaction(token, chatId, msg.reply_to_message.message_id, '👍');
      await mainBot.sendMessage(originalChatId, 'Вы успешно зарегистрировались! Для полного доступа нажмите /start')
    } else if (msg.text === '/manage_guest') {
      managerBot.sendMessage(chatId, 'Please write room number or guest Last name')
      keyRequest = 'find_user'
    } else if (keyRequest === 'find_user') {
      findGuest(chatId, managerBot, msg)
      keyRequest = ''
    } else if (updateProfileMenu.map(item => item[0].callback_data).includes(keyRequest)) {
      updateGuestDetails(chatId, managerBot, keyRequest.split('_')[2], msg, keyRequest )
    } else if (msg.text === '/start') {
      managerBot.sendMessage(chatId, 'this is manager bot')
    } else if (msg.text === '/show_all_guests') {
      User.find()
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
    } else if (msg.text === '/show_checkout_by_date') {
      managerBot.sendMessage(chatId, 'Write now arrival date in format DD-MM-YYYY')
      keyRequest = 'show_checkout_by_date'
    } else if (keyRequest === 'show_checkout_by_date') {
      User.find({departure: msg.text})
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

    } else if (msg.text === '/check_out_all_departing') {
      managerBot.sendMessage(chatId, 'Confirm you would like to check out all departing guest for today', {
        reply_markup: {
          inline_keyboard: checkoutAllGuests
        }
      })
    } else {
      managerBot.sendMessage(chatId, 'Error. Are you sure you replying message to confirm registration?');
    }
  });

}

module.exports = startManagerBot