const { registerGuestDB } = require("../../db/controllers/guest");
const User = require("../../db/models/user");
const { errorTexts } = require("../../mainBot/texts/commonTexts");
const { profileMainMenu, checkoutAllGuests } = require("../keyboards/managerBotKeyboards");
const errorMessages = require("../texts/errorMessages");
const managerBotDescriptions = require("../texts/managerBotDescriptions");
const { userStates, findGuest } = require("./handleUser");
const handleManagerBotMessage = require("./managerBotMessageHandler");
const setMessageReaction = require("./setMessageReaction");

const handleSignIn = async (msg, token, chatId, bot) => {
  if(!msg?.reply_to_message?.text || !msg.text || !token || !chatId || !bot) {
    throw new Error(errorTexts.invalidData)
  }
  try {
    const chatIdMatch = msg.reply_to_message.text.match(/ChatId - (\d+)/);
    if (!chatIdMatch) throw new Error(errorTexts.invalidData);
    const originalChatId = chatIdMatch[1];
    const guestDetails = msg.text.split('/');

    await registerGuestDB(originalChatId, guestDetails, bot, chatId);
    await setMessageReaction(token, chatId, msg.reply_to_message.message_id, '👍');
    await bot.sendMessage(originalChatId, managerBotDescriptions.signIn);
  } catch(error) {
    console.error(errorMessages.signIn, error);
    await bot.sendMessage(chatId, errorTexts.userTryAgainMsg);
  }
};

const handleManageGuest = async (bot, chatId) => {
  try {
    await bot.sendMessage(chatId, managerBotDescriptions.askRoomAndName);
    const prevState = userStates.get(chatId) || {};
    userStates.set(chatId, {
      ...prevState,
      keyRequest: 'find_user'
    });
  } catch(error) {
    console.error(errorMessages.handleGuest, error);
    await bot.sendMessage(chatId, errorMessages.handleGuest);
  }
};

const handleFindUser = async (chatId, bot, msg) => {
  if (!chatId || !bot || !msg) throw new Error(errorTexts.invalidData);
  try {
    await findGuest(chatId, bot, msg);
    const prevState = userStates.get(chatId) || {};
    userStates.set(chatId, {
      ...prevState,
      keyRequest: '',
    })
  } catch(error) {
    console.error(errorMessages.guestNotFound, error);
    await bot.sendMessage(chatId, errorMessages.guestNotFound);
  }
};

const handleShowAllGuests = async (bot, chatId, msg, keyRequest) => {

  if (!bot || !chatId || !msg) throw new Error(errorTexts.invalidData);
  try {
    const users = await User.find();
    if (users.length > 0) {
      await bot.sendMessage(chatId, managerBotDescriptions.findGuestsResult);
      for (const user of users) {
        const guestDetails = handleManagerBotMessage(msg, user, keyRequest);
        bot.sendMessage(chatId, guestDetails, {
          reply_markup: {
            inline_keyboard: profileMainMenu
          }
        })
      }
    } else {
      console.error(errorMessages.findAllGuests)
    }
  } catch(error) {
    console.error(errorMessages.DBAcess, error);
    await bot.sendMessage(chatId, errorMessages.DBAcess);
  }
};

const handleShowCheckOutByDate = async (bot, chatId) => {
  if (!bot || !chatId) throw new Error(errorTexts.invalidData);
  try {
    await bot.sendMessage(chatId, managerBotDescriptions.askDepartureDate);
    const prevState = userStates.get(chatId) || {};
    userStates.set(chatId, {
      ...prevState,
      keyRequest: 'show_checkout_by_date'
    });
  } catch (error) {
    console.error(errorMessages.askDepartureDate, error);
    await bot.sendMessage(chatId, errorMessages.askDepartureDate);
  }
};

const handleRequestShowCheckOutByDate = async (bot, chatId, msg, keyRequest) => {
  if (!bot || !chatId || !msg?.text || !keyRequest) throw new Error(errorTexts.invalidData)
  try {
    const usersByDepartureDate = await User.find({departure: msg.text});
    if (usersByDepartureDate.length > 0) {
      await bot.sendMessage(chatId, managerBotDescriptions.findGuestsResult)
      for (const user of usersByDepartureDate) {
        const guestDetails = handleManagerBotMessage(msg, user, keyRequest);
        await bot.sendMessage(chatId, guestDetails, {
          reply_markup: {
            inline_keyboard: profileMainMenu
          }
          })
      }
    } else {
      console.error(errorMessages.findGuestByDate);
      await bot.sendMessage(chatId, errorMessages.findGuestByDate);
    }
  } catch (error) {
    console.error(errorMessages.checkOut, error);
    await bot.sendMessage(chatId, errorMessages.checkOut,);
  }
};

const handleConfirmCheckOutAllForToday = async (bot, chatId) => {
  if(!bot || !chatId) throw new Error(errorTexts.invalidData);
  try {
    await bot.sendMessage(chatId, managerBotDescriptions.confirmCheckOutByDate, {
      reply_markup: {
        inline_keyboard: checkoutAllGuests
      }
    })
  } catch(error) {
    console.error(errorMessages.confirmCheckOutByDate, error);
    await bot.sendMessage(chatId, errorMessages.confirmCheckOutByDate);
  }
};

module.exports = { handleSignIn, handleManageGuest, handleFindUser, handleShowAllGuests, handleShowCheckOutByDate, handleRequestShowCheckOutByDate, handleConfirmCheckOutAllForToday }