const menuButtons = require("../config/menuButtons");

// Полная клавиатура для зарегистрированных гостей
const mainKeyboardFull = [
  [menuButtons.restaurants, menuButtons.rooms.eng],
  [menuButtons.engeneers, menuButtons.housekeeping],
  [menuButtons.services, menuButtons.weeklyGroup],
  [menuButtons.surroundings, menuButtons.car_rent],
  [menuButtons.special_offers, menuButtons.infrastructure],
  [menuButtons.spa, menuButtons.leave_review],
  [menuButtons.location, menuButtons.about_hotel],
  [menuButtons.close_menu]
];

// Клавиатура для незарегистрированных гостей
const mainKeyboardShort = [
  [menuButtons.sign_in],
  [menuButtons.restaurants, menuButtons.rooms],
  [menuButtons.infrastructure, menuButtons.weeklyGroup],
  [menuButtons.surroundings, menuButtons.car_rent],
  [menuButtons.special_offers, menuButtons.spa],
  [menuButtons.about_hotel, menuButtons.location],
  [menuButtons.close_menu]
];

module.exports = { mainKeyboardFull, mainKeyboardShort };