const { createLocalUser, userStates } = require('../../mainBot/components/currentUsers')
const handleManagerBotMessage = require('../../managerBot/components/managerBotMessageHandler')
const { updateProfileMenu, profileMainMenu } = require('../../managerBot/keyboards/managerBotKeyboards')
const managerBotDescriptions = require('../../managerBot/texts/managerBotDescriptions')
const User = require('../models/user')


const updateGuestDetailsDB = (chatId, managerBot, guestId, guestRoom, changingData, msg, keyRequest) => {
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
      } else {
        console.log('Пользователь не найден')
        return
      }
    })
}

module.exports = {updateGuestDetailsDB, findGuestDB, registerGuestDB}