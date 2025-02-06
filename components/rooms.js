// const roomsListMainPhoto = 'images/rooms/roomsListMainImage.jpeg'
const {roomsKeyboard, bookingButton} = require('../keyboards/roomsKeyboard');

const sendRoomsList = (bot, chatId) => {
  bot.sendMessage(chatId, 'Посмотрите все наши номера 👇🏻',
    {
      reply_markup: {
        keyboard: roomsKeyboard.roomsList
      }
    }
  )
}


const sendRoomInfo = async(bot, chatId, data) => {
    await bot.sendMediaGroup(chatId, data.images);
    await bot.sendMessage(chatId, 'Нажмите ниже, для того, чтобы забронировать номер', {
      reply_markup: {
        inline_keyboard: bookingButton(data.book_url)
      }
    })

    //Для удаления медиа гуппы 
    // const messageIds = sentMessages.map(msg => msg.message_id)
    
    // messageIds.forEach(id => {
    //   mediaGroupIdsToDelete.push(id)
    // })

    // await bot.sendMessage(chatId, 'Вернуться к списку номеров', {
    //   reply_markup: {
    //     inline_keyboard: [
    //       [{ text: 'Назад', callback_data: 'deleteMediaGroup' }]
    //     ]
    //   }
    // })
}

module.exports = {sendRoomsList, sendRoomInfo}