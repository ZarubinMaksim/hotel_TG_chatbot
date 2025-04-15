const { createTwoLinedKeyboard } = require("../components/commomFunctions")
const hotelOnlineMenu = require("../texts/hotelMenues")
const menuButtons = require("../texts/menuButtons")
const { restaurantsDescriptions } = require("../texts/restaurantsText")


const activeRestaurants = Object.values(restaurantsDescriptions).filter(restaurant => restaurant.isActive).map(restaurant => restaurant.title)
const keyboard = createTwoLinedKeyboard(activeRestaurants)

const restaurantsKeyboards = {
  restaurantsListKeyboard: [
    [menuButtons.to_main_menu],
    ...keyboard
  ],
  
  jaakdinKeyboard: [
    [{text: 'Меню', web_app: { url: hotelOnlineMenu.jaakdinMain}}],
    // [{text: 'Детское меню', web_app: { url: jaakdinKids}}],
    // [{text: 'Назад', callback_data: 'back'}]
  ],
  sanookKeyboard: [
    [{text: 'Меню', web_app: { url: hotelOnlineMenu.sanookMain}}],
    // [{text: 'Назад', callback_data: 'back'}]
  ],
  overgrownKeyboard:[
    [{text: 'Меню', web_app: { url: hotelOnlineMenu.overgrownMain}}],
    // [{text: 'Вино', web_app: { url: overgrownWine}}],
    // [{text: 'Коктеили', web_app: { url: overgrownCocktails}}],
    // [{text: 'Назад', callback_data: 'back'}]
  ],
  manawKeyboard: [
    [{text: 'Меню', web_app: { url: hotelOnlineMenu.manawMain}}],
    [{text: 'Счастливые часы', web_app: { url: hotelOnlineMenu.manawHappyHour}}],
    // [{text: 'Назад', callback_data: 'back'}]
  ], 
}

module.exports = restaurantsKeyboards