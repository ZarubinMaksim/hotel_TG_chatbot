const { handleUpdateGuestDetails, handleDeleteGuest, handleCheckOutGroup } = require('./components/handleCallBacks');
const { handleSignIn, handleManageGuest, handleFindUser, handleShowAllGuests, handleShowCheckOutByDate, handleRequestShowCheckOutByDate, handleConfirmCheckOutAllForToday } = require('./components/handleReceivedMessages');
const { userStates, setRequestUserAndSendMsg, updateGuestDetails, setRequestAndSendDeleteConfirmation} = require('./components/handleUser');
const { updateProfileMenu } = require('./keyboards/managerBotKeyboards');
const errorMessages = require('./texts/errorMessages');
const managerBotDescriptions = require('./texts/managerBotDescriptions');
const allowedUsers = process.env.ALLOWED_USERS.split(',').map(id => id.trim());

// определяет что изменить имя фамилию или номер и тд - записывает это в реквест, записывает пользователя и сообщение для отсправки
// const setRequestUserAndSendMsg = (chatId, managerBot, callback_data, userData) => {
//   userStates.set(chatId, {
//     keyRequest: callback_data,
//     changingUser: userData,
//   })
//   changeField = callback_data.split('_').pop();
//   managerBot.sendMessage(chatId, `${managerBotDescriptions.sendNewInfo} ${changeField}`);
// }

// const updateGuestDetails = (chatId, managerBot, changingData, msg, keyRequest ) => {
//   const state = userStates.get(chatId)
//   if (!state) return;
//   const { changingUser } = state
//   const guestId = changingUser.split('\n')[0].split(' - ')[1]
//   const guestRoom = changingUser.split('\n')[2].split(' - ')[1]
//   updateGuestDetailsDB(chatId, managerBot, guestId, guestRoom, changingData, msg, keyRequest)
// }

// const findGuest = (chatId, managerBot, msg) => {
//   const state = userStates.get(chatId)
//   const keyRequest = state?.keyRequest || ''
//   const searchingData = msg.text
//   findGuestDB(chatId, managerBot, searchingData, msg, keyRequest)
// }

// const setRequestAndSendDeleteConfirmation = (chatId, managerBot, callback_data, userData) => {
//   userStates.set(chatId, {
//     keyRequest: callback_data,
//     changingUser: userData,
//   })
//   managerBot.sendMessage(chatId, 'Please confirm you would like to check out guest', {
//     reply_markup: {
//       inline_keyboard: deleteGuestMenu
//     }
//   })
// }

const startManagerBot = (mainBot, managerBot, token) => {
  managerBot.on('callback_query', async callbackQuery => {
    const message = callbackQuery.message;
    const chatId = message.chat.id;
    const callbackData = callbackQuery.data;
    const validUpdateCallbacks = updateProfileMenu.map(item => item[0].callback_data);
    try {
      if (callbackData === 'update_guest_details') {
        await handleUpdateGuestDetails(managerBot, chatId, message);
      } else if (validUpdateCallbacks.includes(callbackData)) {
        await setRequestUserAndSendMsg(chatId, managerBot, callbackData, message.text);
      } else if(callbackData === 'request_delete-guest') {
        await setRequestAndSendDeleteConfirmation(chatId, managerBot, callbackData, message.text);
      } else if(callbackData === 'delete_guest') {
        await handleDeleteGuest(chatId, managerBot);
      } else if (callbackData === 'confirm_checkout_all') {
        await handleCheckOutGroup(chatId, managerBot);
      }
    
      // подтвердить callback, чтобы кнопка перестала "крутиться"
      await managerBot.answerCallbackQuery(callbackQuery.id);
    } catch(error) {
      console.error(errorMessages.callback_mainError, error);
      await managerBot.sendMessage(chatId, errorMessages.callback_mainError);
    }
  });

  managerBot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const state = userStates.get(chatId) || {}
    const keyRequest = state.keyRequest;
    const validUpdateCallbacks = updateProfileMenu.map(item => item[0].callback_data);
    const { text } = msg;

    if (!allowedUsers.includes(chatId.toString())) {
      await managerBot.sendMessage(chatId, errorMessages.unauthorizedUser);
      return;
    }

    try {
      if (msg.reply_to_message) { 
        await handleSignIn(msg, token, chatId, mainBot);
      } else if (text === '/start') {
        await managerBot.sendMessage(chatId, managerBotDescriptions.start);
      } else if (text === '/manage_guest') {
        await handleManageGuest(managerBot, chatId);
      } else if (text === '/show_all_guests') {
        await handleShowAllGuests(managerBot, chatId, msg, keyRequest);
      } else if (text === '/show_checkout_by_date') {
        await handleShowCheckOutByDate(managerBot, chatId);
      }  else if (text === '/check_out_all_departing') {
        await handleConfirmCheckOutAllForToday(managerBot, chatId);
      } else if (keyRequest === 'find_user') {
        await handleFindUser(chatId, managerBot, msg);
      } else if (validUpdateCallbacks.includes(keyRequest)) {
        await updateGuestDetails(chatId, managerBot, keyRequest.split('_')[2], msg, keyRequest);
      } else if (keyRequest === 'show_checkout_by_date') {
        await handleRequestShowCheckOutByDate(managerBot, chatId, msg, keyRequest);
      } else {
        await managerBot.sendMessage(chatId, errorMessages.unrecognizedCommand);
      }
    } catch(error) {
      console.error(errorMessages.receivedMessage_mainError, error);
      await managerBot.sendMessage(chatId, errorMessages.receivedMessage_mainError);
    }
  });
}

module.exports = startManagerBot;