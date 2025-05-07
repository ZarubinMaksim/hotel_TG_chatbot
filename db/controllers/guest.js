const { createLocalUser } = require('../../mainBot/components/currentUsers')
const { errorTexts } = require('../../mainBot/texts/commonTexts')
const handleManagerBotMessage = require('../../managerBot/components/managerBotMessageHandler')
const { updateProfileMenu, profileMainMenu } = require('../../managerBot/keyboards/managerBotKeyboards')
const { errorMessage_userNotFound } = require('../../managerBot/texts/managerBotDescriptions')
const managerBotDescriptions = require('../../managerBot/texts/managerBotDescriptions')
const User = require('../models/user')


const updateGuestDetailsDB = async (
  chatId, 
  managerBot, 
  guestId, 
  guestRoom, 
  changingData, 
  msg, 
  keyRequest,
  ) => {
  if(!chatId || !managerBot || !guestId || !guestRoom || !changingData || !msg?.text) throw new Error(errorTexts.invalidData);
  try {
    const user = await User.findOneAndUpdate(
      { chatId: guestId, room: guestRoom },
      { $set: { [changingData]: msg.text } },
      { new:true }
    );
    if (user) {
      await managerBot.sendMessage(chatId, handleManagerBotMessage(chatId, user, keyRequest), {
        reply_markup: {
          inline_keyboard: updateProfileMenu,
        }
      });
      createLocalUser(user);
    } else {
      await managerBot.sendMessage(chatId, errorMessage_userNotFound);
    }
  } catch (error) {
    console.error(errorMessage_userNotFound, error);
    await managerBot.sendMessage(chatId, errorMessage_userNotFound);
  }
}

const findGuestDB = async (chatId, managerBot, searchingData, msg, keyRequest) => {
  if(!chatId || !managerBot || !searchingData || !msg) throw new Error(errorTexts.invalidData);
  try {
    const guests = await User.find({ $or: [{ room: searchingData}, {lastname: searchingData}] });
    if (guests.length > 0) {
      await managerBot.sendMessage(chatId, managerBotDescriptions.findGuestsResult);
      for (const guest of guests) {
        const guestDetails = handleManagerBotMessage(msg, guest, keyRequest);
        await managerBot.sendMessage(chatId, guestDetails, {
          reply_markup: {
            inline_keyboard: profileMainMenu
          }
         })
      }
    } else {
      await managerBot.sendMessage(chatId, errorMessage_userNotFound);
    }
  } catch(error) {
    console.error(errorMessage_userNotFound, error);
    await managerBot.sendMessage(chatId, errorMessage_userNotFound);
  }
}

const registerGuestDB = async (originalChatId, guestDetails, managerBot, chatId) => {
  if (!originalChatId || !guestDetails || !managerBot || !chatId) throw new Error(errorTexts.invalidData);
  try {
    const user = await User.findOne({ chatId: originalChatId });
    if (user) {
      const updatedUser = await User.findByIdAndUpdate(user._id,
        {
        lastname: guestDetails[1],
        name: guestDetails[2],
        room: guestDetails[0],
        arrival: guestDetails[3],
        departure: guestDetails[4]
      }, 
      { new: true })
      if (updatedUser) {
        createLocalUser(updatedUser)
      } else {
        console.error(errorMessage_userNotCreated);
        await managerBot.sendMessage(chatId, errorMessage_userNotCreated);
      }
    } else {
      console.error(errorMessage_userNotFound);
      await managerBot.sendMessage(chatId, errorMessage_userNotFound);
    }
  } catch (error) {
    console.error(errorMessage_userNotFound, error);
    await managerBot.sendMessage(chatId, errorMessage_userNotFound);
  }
}

module.exports = { updateGuestDetailsDB, findGuestDB, registerGuestDB };