const { updateGuestDetailsDB, findGuestDB } = require("../../db/controllers/guest");
const { errorTexts } = require("../../mainBot/texts/commonTexts");
const { deleteGuestMenu } = require("../keyboards/managerBotKeyboards");
const errorMessages = require("../texts/errorMessages");
const managerBotDescriptions = require("../texts/managerBotDescriptions");
const userStates = new Map();

const setRequestUserAndSendMsg = async (chatId, managerBot, callback_data, userData) => {
  if (!chatId || !managerBot || !callback_data || !userData) {
    throw new Error(errorTexts.invalidData);
  }

  try {
    userStates.set(chatId, {
      keyRequest: callback_data,
      changingUser: userData,
    });
    const changeField = callback_data.split('_').pop();
    await managerBot.sendMessage(chatId, `${managerBotDescriptions.sendNewInfo} ${changeField}`);
  } catch (error) {
    console.error(errorMessages.setRequest, error)
    await managerBot.sendMessage(chatId, errorMessages.setRequest)
  }
};

const updateGuestDetails = async (chatId, managerBot, changingData, msg, keyRequest) => {
  if ( 
    !chatId || !managerBot || !changingData || !msg || !keyRequest
  ) {
    throw new Error(errorTexts.invalidData);
  }
  try {
    const state = userStates.get(chatId);
    if (!state) return;
    const { changingUser } = state;
    const guestId = changingUser.split('\n')[0].split(' - ')[1];
    const guestRoom = changingUser.split('\n')[2].split(' - ')[1];
    await updateGuestDetailsDB(chatId, managerBot, guestId, guestRoom, changingData, msg, keyRequest)
    userStates.delete(chatId);
  } catch (error) {
    console.error(errorMessages.updateGuestDetails, error);
    await managerBot.sendMessage(chatId, errorMessages.updateGuestDetails);
  }
};

const findGuest = async (chatId, managerBot, msg) => {
  if (!chatId || !managerBot || !msg || !msg.text) {
    throw new Error(errorTexts.invalidData);
  }
  try {
    const state = userStates.get(chatId);
    const keyRequest = state?.keyRequest || '';
    const searchingData = msg.text;
    await findGuestDB(chatId, managerBot, searchingData, msg, keyRequest);
    userStates.delete(chatId);
  } catch (error) {
    console.error(errorMessages.findGuest, error);
    await managerBot.sendMessage(chatId, errorMessages.findGuest);
  }
};

const setRequestAndSendDeleteConfirmation = async(chatId, managerBot, callback_data, userData) => {
  if (!chatId || !managerBot || !callback_data || !userData) {
    throw new Error(errorTexts.invalidData);
  }
  try {
    userStates.set(chatId, {
      keyRequest: callback_data,
      changingUser: userData,
    })
    await managerBot.sendMessage(chatId, managerBotDescriptions.confirmCheckOut, {
      reply_markup: {
        inline_keyboard: deleteGuestMenu,
      }
    }) 
  } catch(error) {
    console.error(errorMessages.confirmCheckOut, error);
    await managerBot.sendMessage(chatId, errorMessages.confirmCheckOut);
  }
};

module.exports = { userStates, setRequestUserAndSendMsg, updateGuestDetails, findGuest, setRequestAndSendDeleteConfirmation}