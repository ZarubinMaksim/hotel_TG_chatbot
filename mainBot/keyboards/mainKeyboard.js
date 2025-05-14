const { menuButtons }= require("../config/appItems");

// Полная клавиатура для зарегистрированных гостей
const mainKeyboardFull = [
  [menuButtons.restaurants, menuButtons.roomService],
  [menuButtons.services, menuButtons.rooms],
  [menuButtons.engineer, menuButtons.housekeeping],
  [menuButtons.surroundings, menuButtons.car_rent],
  [menuButtons.special_offers, menuButtons.infrastructure],
  [menuButtons.spa, menuButtons.weeklyGroup],
  [menuButtons.location, menuButtons.leave_review],
  [menuButtons.hide_menu, menuButtons.about_hotel]
];

// Клавиатура для незарегистрированных гостей
const mainKeyboardShort = [
  [menuButtons.sign_in],
  [menuButtons.restaurants, menuButtons.rooms],
  [menuButtons.infrastructure, menuButtons.weeklyGroup],
  [menuButtons.surroundings, menuButtons.car_rent],
  [menuButtons.special_offers, menuButtons.spa],
  [menuButtons.about_hotel, menuButtons.location],
  [menuButtons.hide_menu]
];

module.exports = { mainKeyboardFull, mainKeyboardShort };