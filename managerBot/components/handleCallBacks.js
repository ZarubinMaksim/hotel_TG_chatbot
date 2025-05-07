const User = require("../../db/models/user");
const { checkOutGuest } = require("../../mainBot/components/currentUsers");
const { errorTexts } = require("../../mainBot/texts/commonTexts");
const { updateProfileMenu } = require("../keyboards/managerBotKeyboards");
const errorMessages = require("../texts/errorMessages");
const { userStates } = require("./handleUser");

const handleUpdateGuestDetails = async (bot, chatId, message ) => {
  if (!bot || !chatId || !message  || !message.text) {
    throw new Error(errorTexts.invalidData);
  }
  try {
    await bot.sendMessage(chatId, message.text, {
      reply_markup: {
        inline_keyboard: updateProfileMenu
      }
    })
  } catch(error) {
    console.error(errorMessages.updateGuestMenu, error);
    await bot.sendMessage(chatId, errorMessages.tryAgain);
  }
}

const handleDeleteGuest = async (chatId, bot) => {
  const state = userStates.get(chatId)
  if (!state) return

  const firstLine = state.changingUser.split('\n')[0];
  const guestId = firstLine?.split(' - ')[1];
  if (!guestId) return;
  
  try {
    const userToDelete = await User.findOneAndDelete({chatId: guestId})
    if (userToDelete) {
      try {
        await checkOutGuest(guestId);
        await bot.sendMessage(chatId, `${userToDelete.lastname} ${userToDelete.name} from room ${userToDelete.room} checked out`)
      } catch(error) {
        console.error(errorMessages.checkOut, error)
        await bot.sendMessage(chatId, errorMessages.checkOut);
      }
    } else {
      console.error(errorMessages.guestNotFound);
      await bot.sendMessage(chatId, errorMessages.guestNotFound);
    }
  } catch(error) {
    console.error(errorMessages.DBAcess, error);
    await bot.sendMessage(chatId, errorMessages.DBAcess);
  } 
}

const handleCheckOutGroup = async (chatId, bot) => {
  try {
    const usersToDelete = await User.deleteMany({departure: '25-02-2025'}); //тут нужно будет создать сегодняшнее число
    if (usersToDelete.deletedCount > 0) {
      await bot.sendMessage(chatId, `${usersToDelete.deletedCount} user(s) have been deleted`);
    } else {
      console.error(errorMessages.checkOutToday);
      await bot.sendMessage(chatId, errorMessages.checkOutToday);
    }
  } catch(error) {
    console.error(errorMessages.DBAcess, error);
    await bot.sendMessage(chatId, errorMessages.DBAcess);
  }
}

module.exports = { handleUpdateGuestDetails, handleDeleteGuest, handleCheckOutGroup };