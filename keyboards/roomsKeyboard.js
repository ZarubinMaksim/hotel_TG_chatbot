const { roomsDescriptions } = require("../texts/roomsText")

const bookingButton = (bookUrl) => {
  return [[{ text: 'Забронировать!', web_app: { url: bookUrl } }]]
}

const roomsKeyboard = {
  roomsList:   [
    ['В главное меню 🔙'],
    ...Object.values(roomsDescriptions).map(roomsDescription => {
      return [roomsDescription.title]
    })
  ]
}

module.exports = {roomsKeyboard, bookingButton}