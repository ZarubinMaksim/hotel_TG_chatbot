const menuButtons = require("../texts/menuButtons");

const mainKeyboardFull = [
  [menuButtons.about_hotel, menuButtons.rooms],
  [menuButtons.engeneers, menuButtons.housekeeping],
  [menuButtons.services, menuButtons.restaurants],
  [menuButtons.special_offers, menuButtons.infrastructure],
  [menuButtons.spa, menuButtons.location],
  [menuButtons.leave_review, menuButtons.surroundings],
  [menuButtons.close_menu]
]

const mainKeyboardShort = [
  [menuButtons.sign_in],
  [menuButtons.about_hotel, menuButtons.rooms],
  [menuButtons.infrastructure, menuButtons.restaurants],
  [menuButtons.special_offers, menuButtons.spa],
  [menuButtons.surroundings, menuButtons.location],
  [menuButtons.close_menu]
]

module.exports = {mainKeyboardFull, mainKeyboardShort}