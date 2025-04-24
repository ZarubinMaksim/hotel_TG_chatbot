const { createLocalUser } = require('../../mainBot/components/currentUsers')
const handleManagerBotMessage = require('../../managerBot/components/managerBotMessageHandler')
const { updateProfileMenu, profileMainMenu } = require('../../managerBot/keyboards/managerBotKeyboards')
const { errorMessage_userNotFound } = require('../../managerBot/texts/managerBotDescriptions')
const managerBotDescriptions = require('../../managerBot/texts/managerBotDescriptions')
const User = require('../models/user')


const updateGuestDetailsDB = async (chatId, managerBot, guestId, guestRoom, changingData, msg, keyRequest) => {
  // try {
  //   const user = await User.findOneAndUpdate(
  //     { chatId: guestId, room: guestRoom },
  //     { $set: { [changingData]: msg.text } },
  //     { new:true }
  //   );
  //   if (user) {
  //     await managerBot.sendMessage(chatId, handleManagerBotMessage(chatId, user, keyRequest), {
  //       reply_markup: {
  //         inline_keyboard: updateProfileMenu,
  //       }
  //     });
  //     createLocalUser(user);
  //   } else {
  //     managerBot.sendMessage(chatId, errorMessage_userNotFound);
  //   }
  // } catch (error) {
  //   console.log(errorMessage_userNotFound, err);
  //   managerBot.sendMessage(chatId, errorMessage_userNotFound);
  // }

  User.findOneAndUpdate({ chatId: guestId, room: guestRoom}, { $set: {[changingData]: msg.text}}, {new:true})
  .then(user => {
    managerBot.sendMessage(chatId, handleManagerBotMessage(chatId, user, keyRequest), {
      reply_markup: {
        inline_keyboard: updateProfileMenu
      }
    })
    createLocalUser(user)
  })
  .catch(err => {
    console.log(errorMessage_userNotFound, err)
    managerBot.sendMessage(chatId, errorMessage_userNotFound)
  })
}

const findGuestDB = (chatId, managerBot, searchingData, msg, keyRequest) => {
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
    .catch(err => {
      console.log(errorMessage_userNotFound, err)
      managerBot.sendMessage(chatId, errorMessage_userNotFound)
    })
}

const registerGuestDB = (originalChatId, guestDetails) => {
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
        .catch(err => {
          console.log(errorMessage_userNotCreated, err)
        })
      } else {
        console.log(errorMessage_userNotFound)
        return
      }
    })
}

module.exports = {updateGuestDetailsDB, findGuestDB, registerGuestDB}