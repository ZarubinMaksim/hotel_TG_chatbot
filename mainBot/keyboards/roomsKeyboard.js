const { createOneLinedKeyboard } = require("../components/commomFunctions");
const { menuButtons }= require("../config/appItems");
const { roomsDescriptions } = require("../texts/roomsText");
const activeRooms = Object.values(roomsDescriptions).filter(room => room.isActive).map(room => room.title);
const roomListKeyboard = createOneLinedKeyboard(activeRooms);

const bookingButton = (bookUrl) => {
  return [[{ text: 'Забронировать!', web_app: { url: bookUrl } }]]
};

const roomsKeyboard = {
  roomsList:   [
    [menuButtons.main_menu],
    ...roomListKeyboard
  ]
};

module.exports = { roomsKeyboard, bookingButton };