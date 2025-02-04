// const roomsListMainPhoto = 'images/rooms/roomsListMainImage.jpeg'
const { roomsDescriptions } = require('../texts/roomsText')

const sendRoomsList = (bot, chatId) => {
  bot.sendMessage(chatId, 'Посмотрите все наши номера 👇🏻',
    {
      reply_markup: {
        keyboard: [
          ['В главное меню 🔙'],
          ...Object.values(roomsDescriptions).map(roomsDescription => {
            return [roomsDescription.title]
          })
        ]
        // inline_keyboard: Object.values(roomsDescriptions).map(roomsDescription => {
        //   return [{ text: roomsDescription.title, callback_data: roomsDescription.callback}]
        // })
      }
    }
  )
}


const sendRoomInfo = async(bot, chatId, data, mediaGroupIdsToDelete) => {
    await bot.sendMediaGroup(chatId, data.images);
    await bot.sendMessage(chatId, 'Нажмите ниже, для того, чтобы забронировать номер', {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'Забронировать!', web_app: { url: data.book_url } }]
        ]
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