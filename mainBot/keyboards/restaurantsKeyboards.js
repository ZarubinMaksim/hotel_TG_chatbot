const { createTwoLinedKeyboard } = require("../components/commomFunctions");
const hotelOnlineMenu = require("../config/hotelMenues");
const { menuButtons } = require("../config/appItems");
const { restaurantsDescriptions, commonRestaurantTexts } = require("../texts/restaurantsText");
const activeRestaurants = Object.values(restaurantsDescriptions)
  .filter(restaurant => restaurant.isActive)
  .map(restaurant => restaurant.title);
const restaurantTitlesKeyboard = createTwoLinedKeyboard(activeRestaurants);

const restaurantsKeyboards = {
  //формируем клавиатуру с кнопкой назад и списком ресторанов
  restaurantsListKeyboard: [
    [menuButtons.main_menu],
    ...restaurantTitlesKeyboard
  ],
  
  //меню на каждый ресторан
  jaakdinKeyboard: [
    [{text: commonRestaurantTexts.menu, web_app: { url: hotelOnlineMenu.jaakdinMain}}],
  ],
  sanookKeyboard: [
    [{text: commonRestaurantTexts.menu, web_app: { url: hotelOnlineMenu.sanookMain}}],
  ],
  overgrownKeyboard:[
    [{text: commonRestaurantTexts.menu, web_app: { url: hotelOnlineMenu.overgrownMain}}],
  ],
  manawKeyboard: [
    [{text: commonRestaurantTexts.menu, web_app: { url: hotelOnlineMenu.manawMain}}],
    [{text: commonRestaurantTexts.happy_hours, web_app: { url: hotelOnlineMenu.manawHappyHour}}],
  ], 
}

module.exports = restaurantsKeyboards;