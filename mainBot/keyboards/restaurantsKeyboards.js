const { createTwoLinedKeyboard } = require("../components/commomFunctions")
const menuButtons = require("../texts/menuButtons")
const { restaurantsDescriptions } = require("../texts/restaurantsText")

const jaakdinUrl = 'https://menu.in.th/JaakDin-Restaurant'
const jaakdinKids = 'https://drive.google.com/file/d/1dnMDhIK1tcZLW239bMtzQBSEn-QqQzjo/view'
const sanookUrl = 'https://menu.in.th/Sanook-Restaurant?qr-id=4PZkWoeTMePDvIHwV8pp100%3D'
const overgrownUrl = 'https://drive.google.com/drive/folders/14lxbzQ0eja4Bo7Eh53WSQU3q6KahimCx'
const overgrownWine = 'https://drive.google.com/drive/folders/14lxbzQ0eja4Bo7Eh53WSQU3q6KahimCx'
const overgrownCocktails = 'https://drive.google.com/drive/folders/14lxbzQ0eja4Bo7Eh53WSQU3q6KahimCx'
const manawHappyUrl = 'https://drive.google.com/file/d/1achKz__fQyXl6MbpKxD-H4wtlh1MjSLd/view'
const manawUrl = 'https://menu.in.th/Manaw-Bar'

const activeRestaurants = Object.values(restaurantsDescriptions).filter(restaurant => restaurant.isActive).map(restaurant => restaurant.title)
const keyboard = createTwoLinedKeyboard(activeRestaurants)

const restaurantsKeyboards = {
  restaurantsListKeyboard: [
    [menuButtons.to_main_menu],
    ...keyboard
  ],
  
  restaurantsMenuesListKeyboad: [
    [
      {
        text: 'JaakDin',
        web_app: { url: jaakdinUrl }
      },
      {
        text: 'JaakDin Детское',
        web_app: { url: jaakdinKids }
      }
    ],
    [{
      text: 'Sanook',
      web_app: { url: sanookUrl }
    }],
    [
      {
        text: 'OverGrown',
        web_app: { url: overgrownUrl }
      },
      {
        text: 'OverGrown Вино',
        web_app: {url: overgrownWine}
      },
      {
        text: 'OverGrown Cocktails',
        web_app: { url: overgrownCocktails}
      }
    ],
    [
      {
        text: 'Manaw Manaw',
        web_app: { url: manawUrl }
      },
      {
        text: 'Manaw Счастливые часы',
        web_app: {url: manawHappyUrl }
      }
    ]
  ],
  jaakdinKeyboard: [
    [{text: 'Меню', web_app: { url: jaakdinUrl}}],
    [{text: 'Детское меню', web_app: { url: jaakdinKids}}],
    // [{text: 'Назад', callback_data: 'back'}]
  ],
  sanookKeyboard: [
    [{text: 'Меню', web_app: { url: sanookUrl}}],
    // [{text: 'Назад', callback_data: 'back'}]
  ],
  overgrownKeyboard:[
    [{text: 'Меню', web_app: { url: overgrownUrl}}],
    [{text: 'Вино', web_app: { url: overgrownWine}}],
    [{text: 'Коктеили', web_app: { url: overgrownCocktails}}],
    // [{text: 'Назад', callback_data: 'back'}]
  ],
  manawKeyboard: [
    [{text: 'Меню', web_app: { url: manawUrl}}],
    [{text: 'Счастливые часы', web_app: { url: manawHappyUrl}}],
    // [{text: 'Назад', callback_data: 'back'}]
  ], 
}

module.exports = restaurantsKeyboards