const menuButtons = require("../texts/menuButtons");

const mainKeyboardFull = [
  [menuButtons.restaurants, menuButtons.rooms],
  [menuButtons.engeneers, menuButtons.housekeeping],
  [menuButtons.services, menuButtons.weeklyGroup],
  [menuButtons.surroundings, menuButtons.car_rent],
  [menuButtons.special_offers, menuButtons.infrastructure],
  [menuButtons.spa, menuButtons.leave_review],
  [menuButtons.location, menuButtons.about_hotel],
  [menuButtons.close_menu]
]

const mainKeyboardShort = [
  [menuButtons.sign_in],
  [menuButtons.restaurants, menuButtons.rooms],
  [menuButtons.infrastructure, menuButtons.weeklyGroup],
  [menuButtons.surroundings, menuButtons.car_rent],
  [menuButtons.special_offers, menuButtons.spa],
  [menuButtons.about_hotel, menuButtons.location],
  [menuButtons.close_menu]
]

module.exports = {mainKeyboardFull, mainKeyboardShort}