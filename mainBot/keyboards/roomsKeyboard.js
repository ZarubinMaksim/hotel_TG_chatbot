const { createOneLinedKeyboard } = require("../components/commomFunctions")
const menuButtons = require("../texts/menuButtons")
const { roomsDescriptions } = require("../texts/roomsText")
const activeRooms = Object.values(roomsDescriptions).filter(room => room.isActive).map(room => room.title)
const keyboard = createOneLinedKeyboard(activeRooms)

const bookingButton = (bookUrl) => {
  return [[{ text: 'Забронировать!', web_app: { url: bookUrl } }]]
}

const roomsKeyboard = {
  roomsList:   [
    [menuButtons.to_main_menu],
    ...keyboard
  ]
}

module.exports = {roomsKeyboard, bookingButton}