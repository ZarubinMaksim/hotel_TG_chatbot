const TelegramBot = require('node-telegram-bot-api')
const token = '7641248146:AAENDL-yedY7xYkQcSQdfduibKCMt3VIy28'
const tokenManager = '7595558526:AAGVJLInp92m5MH0J-G4eczEfMen4Ma6YHI'
const bot = new TelegramBot(token, { polling: true })
module.exports = bot


const managerBot = new TelegramBot(tokenManager, { polling: true })
const sendMainMenu = require('./components/start')
const sendAbout = require('./components/about')
const {sendRoomsList, sendRoomInfo} = require('./components/rooms')
const {sendRestaurantsList, sendRestaurantInfo} = require('./components/fnb')
const {sendSpecialOffers, sendSpecialOfferInfo} = require('./components/specialOffers')
const {specialOffersDescription} = require('./texts/specialOffersText')
const specialOffersTitles = Object.values(specialOffersDescription).filter(offer => offer.isActive).map(offer => offer.title)
const specialOffersRegex = new RegExp(`^(${specialOffersTitles.join('|')})$`);
const { roomsDescriptions } = require('./texts/roomsText')
const roomsTitles = Object.values(roomsDescriptions).filter(room => room.isActive).map(room => room.title)
const roomsRegex = new RegExp(`^(${roomsTitles.join('|')})$`);
const { restaurantsDescriptions } = require('./texts/restaurantsText')
const restaurantsTitles = Object.values(restaurantsDescriptions).filter(restaurant => restaurant.isActive).map(restaurant => restaurant.title)
const restaurantsRegex = new RegExp(`^(${restaurantsTitles.join('|')})$`)
const { sendInfrastructureList, sendInfrastructureInfo } = require('./components/infrastructure')
const { infrastructureDescriptions } = require('./texts/infrastructureTexts')
const infrastructuresTitles = Object.values(infrastructureDescriptions).map(infrastructure => infrastructure.title)
const infrastructuresRegex = new RegExp(`^(${infrastructuresTitles.join('|')})$`)
const { sendSpaInfo, sendSpaDescription} = require('./components/spa')
const { spaDescriptions } = require('./texts/spaTexts')
const sendHotelLocation = require('./components/hotelLocation')
const {sendPlatformsForReview, getReview} = require('./components/review')
const { sendSurroundingsList, sendSurrounding, sendExactSurrounding } = require('./components/surround')
const { surroundingsDescriptions } = require('./texts/surroundText')
const {sendServicesList, sendServiceDescription} = require('./components/services')
const {servicesDescription} = require('./texts/servicesText')
const { sendEngeners, sengHousekeeping } = require('./components/requests')
const handleManagerBotMessage = require('./components/managerBotMessageHandler')
const { sendWithLoading, hideMainMenu } = require('./components/commomFunctions')
const keyRequests = require('./texts/keyRequests')
const regexMenuButtons = require('./texts/regexMenuButtons')
const sendPromotion = require('./components/sendPromotion')
const startTexts = require('./texts/startTexts')
const {signUp, checkPersonalDetails} = require('./components/signUp')
const surroundingsTitles = Object.values(surroundingsDescriptions).filter(surrounding => surrounding.isActive).map(surrounding => surrounding.title)
const surroundingsRegex = new RegExp(`^(${surroundingsTitles.join('|')})$`)
const spaTitles = Object.values(spaDescriptions).filter(spa => spa.isActive).map(spa => spa.title)
const spaRegex = new RegExp(`^(${spaTitles.join('|')})$`)
const servicesTitles = Object.values(servicesDescription).filter(service => service.isActive).map(service => service.title)
const servicesRegex = new RegExp(`^(${servicesTitles.join('|')})$`)
const surroundingsTitlesAll = Object.values(surroundingsDescriptions).flatMap(section => Object.values(section.items).filter(item => item.isActive).map(item => item.title))
const surroundingsTitlesAllRegEx = new RegExp(`^(${surroundingsTitlesAll.join('|')})$`)
const userStates = {}

const managerChatId = 317138824

// ******
    // Показываем всплывающее уведомление
    // bot.answerCallbackQuery(callbackQuery.id, {
    //   show_alert: true,  // Показываем всплывающее окно
    //   text: "Дата выбрана",  // Сообщение, которое будет показано
    // });
// ******

const setUserState = (chatId, keyRequest) => {
  userStates[chatId] = keyRequest
}

const getUserState = (chatId) => {
  return userStates[chatId] || ''
}

bot.setMyCommands([
  { command: '/start', description: startTexts.show_menu },
]);

managerBot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  managerBot.sendMessage(chatId, 'this is manager bot')
});

async function setMessageReaction(chatId, messageId, emoji) {
  await fetch(`https://api.telegram.org/bot${tokenManager}/setMessageReaction`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
          chat_id: chatId,
          message_id: messageId,
          reaction: [{ type: "emoji", emoji: emoji }]
      })
  });
}

managerBot.on('message', async (msg) => {
  const chatId = msg.chat.id;

  if (msg.reply_to_message) { 
      const originalChatId = msg.reply_to_message.text.split('ChatID - ')[1]?.trim()
      // console.log(msg.reply_to_message.text.split('ChatID - '))
      await setMessageReaction(chatId, msg.reply_to_message.message_id, '👍');
      await bot.sendMessage(originalChatId, 'Вы успешно зарегистрировались')
      // await checkPersonalDetails()
      
  } else {
      // console.log(chatId);
      managerBot.sendMessage(chatId, 'Error. Are you sure you replying message to confirm registration?');
  }
});


bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  sendPromotion(chatId)

  if (/\/start/.test(text)) {
    setUserState(chatId, keyRequests.main_menu)
    const keyRequest = getUserState(chatId)
    sendWithLoading(chatId, sendMainMenu, keyRequest)
  } 
  else if (regexMenuButtons.main_menu.test(text)) {
    setUserState(chatId, keyRequests.main_menu)
    const keyRequest = getUserState(chatId)
    sendWithLoading(chatId, sendMainMenu, keyRequest)
  } 
  else if (regexMenuButtons.hide_menu.test(text)) {
    hideMainMenu(chatId)
  } 
  else if (regexMenuButtons.sign_in.test(text)) {
    setUserState(chatId, keyRequests.sign_in)
    const keyRequest = getUserState(chatId)
    sendWithLoading(chatId, signUp)
  } 
  else if (regexMenuButtons.about_hotel.test(text)) {
    setUserState(chatId, keyRequests.about_hotel)
    const keyRequest = getUserState(chatId)
    sendWithLoading(chatId, sendAbout, keyRequest)
  } 
  else if (regexMenuButtons.rooms.test(text)) {
    setUserState(chatId, keyRequests.room)
    const keyRequest = getUserState(chatId)
    sendWithLoading(chatId, sendRoomsList, keyRequest)
  } 
  else if (roomsRegex.test(text)) {
    const roomTitle = msg.text; // Тайтл комнаты из сообщения
    // Ищем комнату в списке по тайтлу
    const callback = Object.values(roomsDescriptions).find(value => value.title === roomTitle);
    sendWithLoading(chatId, sendRoomInfo, callback)
  } 
  else if (regexMenuButtons.engeneers.test(text)) {
    setUserState(chatId, keyRequests.engeneers)
    const keyRequest = getUserState(chatId)
    sendWithLoading(chatId, sendEngeners, keyRequest)
  } 
  else if (regexMenuButtons.housekeeping.test(text)) {
    setUserState(chatId, keyRequests.housekeeping)
    const keyRequest = getUserState(chatId)
    sendWithLoading(chatId, sengHousekeeping, keyRequest)
  } 
  else if (regexMenuButtons.restaurants.test(text)) {
    setUserState(chatId, keyRequests.restaurants)
    const keyRequest = getUserState(chatId)
    sendWithLoading(chatId, sendRestaurantsList, keyRequest)
  } 
  else if (restaurantsRegex.test(text)) {
    const restaurantTitle = msg.text
    const callback = Object.values(restaurantsDescriptions).find(value => value.title === restaurantTitle)
    sendWithLoading(chatId, sendRestaurantInfo, callback)
  } 
  else if (regexMenuButtons.special_offers.test(text)) {
    setUserState(chatId, keyRequests.special_offers)
    const keyRequest = getUserState(chatId)
    sendWithLoading(chatId, sendSpecialOffers, keyRequest)
  } 
  else if (specialOffersRegex.test(text)) {
    const specialOfferTitle = msg.text
    const callback = Object.values(specialOffersDescription).find(value => value.title === specialOfferTitle)
    sendWithLoading(chatId, sendSpecialOfferInfo, callback)
  } 
  else if (regexMenuButtons.infrastructure.test(text)) {
    setUserState(chatId, keyRequests.infrastructure)
    const keyRequest = getUserState(chatId)
    sendWithLoading(chatId, sendInfrastructureList, keyRequest)
  } 
  else if (infrastructuresRegex.test(text)) {
    const infrastructureTitle = msg.text
    const callback = Object.values(infrastructureDescriptions).find(value => value.title === infrastructureTitle)
    sendWithLoading(chatId, sendInfrastructureInfo, callback)
  } 
  else if (regexMenuButtons.spa.test(text)) { 
    setUserState(chatId, keyRequests.spa)
    const keyRequest = getUserState(chatId)
    sendWithLoading(chatId, sendSpaInfo, keyRequest)
  } 
  else if (spaRegex.test(text)) {
    const spaTitle = msg.text
    const callback = Object.values(spaDescriptions).find(value => value.title === spaTitle)
    sendWithLoading(chatId, sendSpaDescription, callback)
  } 
  else if (regexMenuButtons.location.test(text)) {
    setUserState(chatId, keyRequests.location)
    const keyRequest = getUserState(chatId)
    sendWithLoading(chatId, sendHotelLocation, keyRequest)
  } 
  else if (regexMenuButtons.services.test(text)) {
    setUserState(chatId, keyRequests.services)
    const keyRequest = getUserState(chatId)
    sendWithLoading(chatId, sendServicesList, keyRequest)
  } 
  else if (servicesRegex.test(text)) {
    const serviceTitle = msg.text
    const callback = Object.values(servicesDescription).find(value => value.title === serviceTitle)
    setUserState(chatId, callback.keyRequest)
    const keyRequest = getUserState(chatId)
    sendWithLoading(chatId, sendServiceDescription, callback)
  } 
  else if (regexMenuButtons.review.test(text)) {
    setUserState(chatId, keyRequests.review)
    const keyRequest = getUserState(chatId)
    sendWithLoading(chatId, sendPlatformsForReview, keyRequest)
  } 
  else if (regexMenuButtons.surroundings.test(text)) {
    setUserState(chatId, keyRequests.surroundings)
    const keyRequest = getUserState(chatId)
    sendWithLoading(chatId, sendSurroundingsList, keyRequest)
  } 
  else if (surroundingsRegex.test(text)) {
    const surroundingTitle = msg.text
    const callback = Object.values(surroundingsDescriptions).find(value => value.title === surroundingTitle)
    sendWithLoading(chatId, sendSurrounding, callback)
  } 
  else if (surroundingsTitlesAllRegEx.test(text)) {
    const surroundingTitle = msg.text
    const callback = Object.values(surroundingsDescriptions).flatMap(section => Object.values(section.items)).find(item => item.title === surroundingTitle)
    sendWithLoading(chatId, sendExactSurrounding, callback)
  } 
  else {
    const keyRequest = getUserState(chatId)
    if (keyRequest === keyRequests.housekeeping) {
      const messageData = handleManagerBotMessage(msg, keyRequest)
      managerBot.sendMessage(managerChatId, messageData)
      setUserState(chatId, '')
    } else if (keyRequest === keyRequests.engeneers) {
      const messageData = handleManagerBotMessage(msg, keyRequest)
      managerBot.sendMessage(managerChatId, messageData)
      setUserState(chatId, '')
    } else if (keyRequest === keyRequests.review) {
      getReview(bot,managerBot, chatId, msg)
      setUserState(chatId, '')
    } else if (keyRequest === keyRequests.sign_in) {
      console.log('eto else',keyRequest)
      const messageData = handleManagerBotMessage(msg, keyRequest, chatId)
      managerBot.sendMessage(managerChatId, messageData)
      setUserState(chatId, '')
      const loh = localStorage.getItem('keyRequest')
      console.log('loh', loh)
    } else if (keyRequest === keyRequests.transportation) {
      const messageData = handleManagerBotMessage(msg, keyRequest)
      managerBot.sendMessage(managerChatId, messageData)
      setUserState(chatId, '')
    } else if (keyRequest === keyRequests.wake_up_call) {
      const messageData = handleManagerBotMessage(msg, keyRequest)
      managerBot.sendMessage(managerChatId, messageData)
      setUserState(chatId, '')
    } else if (keyRequest === keyRequests.breakfast_box) {
      const messageData = handleManagerBotMessage(msg, keyRequest)
      managerBot.sendMessage(managerChatId, messageData)
      setUserState(chatId, '')
    } else if (keyRequest === keyRequests.luggage) {
      const messageData = handleManagerBotMessage(msg, keyRequest)
      managerBot.sendMessage(managerChatId, messageData)
      setUserState(chatId, '')
    } else {
      localStorage.setItem('keyRequest', keyRequests.unidentified)
      const messageData = handleManagerBotMessage(msg, keyRequest)
      managerBot.sendMessage(managerChatId, messageData)
      setUserState(chatId, '')
    }
  }
})

// bot.onText(/\/start/, (msg) => {
//   const chatId = msg.chat.id;
//   sendMainMenu(bot, chatId)
// });

// bot.onText(/В главное меню 🔙/, (msg) => {
//   const chatId = msg.chat.id
//   sendMainMenu(bot, chatId)
// })

// bot.onText(/Об Отеле/, (msg) => {
//   console.log(msg)
//   const chatId = msg.chat.id;
//   sendAbout(bot, chatId)
// });

// bot.onText(/Наши номера/, (msg) => {
//   const chatId = msg.chat.id;
//   sendRoomsList(bot, chatId)
// });

// bot.onText(roomsRegex, (msg) => {
//   const chatId = msg.chat.id;
//   const roomTitle = msg.text; // Тайтл комнаты из сообщения

//   // Ищем комнату в списке по тайтлу
//   const callback = Object.values(roomsDescriptions).find(value => value.title === roomTitle);
//   sendRoomInfo(bot, chatId, callback, mediaGroupIdsToDelete)
// });

// bot.onText(/Меню ресторанов/, (msg) => {
//   const chatId = msg.chat.id
//   sendMenuList(bot, chatId)
// })


// bot.onText(/Enginers/, (msg) => {
//   const chatId = msg.chat.id
//   sendEngeners(bot, chatId)
// })

// bot.onText(/HSK/, (msg) => {
//   const chatId = msg.chat.id
//   sengHousekeeping(bot, chatId)
// })

// bot.onText(/Рестораны/, (msg) => {
//   const chatId = msg.chat.id
//   sendRestaurantsList(bot, chatId)
// })

// bot.onText(restaurantsRegex, (msg) => {
//   const chatId = msg.chat.id
//   const restaurantTitle = msg.text
//   const callback = Object.values(restaurantsDescriptions).find(value => value.title === restaurantTitle)
//   sendRestaurantInfo(bot, chatId, callback)
// })

// bot.onText(/Спецпредложения/, (msg) => {
//   const chatId = msg.chat.id
//   sendSpecialOffers(bot, chatId)
// })

// bot.onText(specialOffersRegex, (msg) => {
//   const chatId = msg.chat.id
//   const specialOfferTitle = msg.text
//   const callback = Object.values(specialOffersDescription).find(value => value.title === specialOfferTitle)
//   sendSpecialOfferInfo(bot, chatId, callback)
// })

// bot.onText(/Инфраструктура/, (msg) => {
//   const chatId = msg.chat.id;
//   sendInfrastructureList(bot, chatId)
// })

// bot.onText(infrastructuresRegex, (msg) => {
//   const chatId = msg.chat.id
//   const infrastructureTitle = msg.text
//   const callback = Object.values(infrastructureDescriptions).find(value => value.title === infrastructureTitle)
//   sendInfrastructureInfo(bot, chatId, callback)
// })

// bot.onText(/Спа/, (msg) => {
//   const chatId = msg.chat.id
//   sendSpaInfo(bot, chatId)
// })

// bot.onText(spaRegex, (msg) => {
//   const chatId = msg.chat.id
//   const spaTitle = msg.text
//   const callback = Object.values(spaDescriptions).find(value => value.title === spaTitle)
//   sendSpaDescription(bot, chatId, callback)
// })

// bot.onText(/Геолокация/, (msg) => {
//   const chatId = msg.chat.id
//   sendHotelLocation(bot, chatId)
// })

// bot.onText(/Услуги/, (msg) => {
//   const chatId = msg.chat.id
//   sendServicesList(bot, chatId)
// })

// bot.onText(servicesRegex, (msg) => {
//   const chatId = msg.chat.id
//   const serviceTitle = msg.text
//   const callback = Object.values(servicesDescription).find(value => value.title === serviceTitle)
//   sendServiceDescription(bot, chatId, callback)
// })

// bot.onText(/Оставить отзыв/, (msg) => {
//   const chatId = msg.chat.id
//   sendPlatformsForReview(bot, chatId)
// })

// bot.onText(/^отзыв[.,!?;:\s]/i, (msg) => {
//   const chatID = msg.chat.id;
//   getReview(bot,managerBot, chatID, msg)
// });

// bot.onText(/(Что рядом|Назад к выбору\s*🔙)$/i, (msg) => {
//   const chatId = msg.chat.id;
//   sendSurroundingsList(bot, chatId);
// });

// bot.onText(surroundingsRegex, (msg) => {
//   const chatId = msg.chat.id
//   const surroundingTitle = msg.text
//   const callback = Object.values(surroundingsDescriptions).find(value => value.title === surroundingTitle)
//   sendSurrounding(bot, chatId, callback)
// })

// bot.onText(surroundingsTitlesAllRegEx, (msg) => {
//   const chatId = msg.chat.id
//   const surroundingTitle = msg.text
//   const callback = Object.values(surroundingsDescriptions).flatMap(section => Object.values(section.items)).find(item => item.title === surroundingTitle)
//   sendExactSurrounding(bot, chatId, callback)
// })


bot.on('callback_query', async (callbackQuery) => {
  const chatId = callbackQuery.message.chat.id;
  const callbackData = callbackQuery.data;
  const currentMessageId = callbackQuery.message.message_id

  if (callbackData === 'main_menu') {
    sendMainMenu(bot, chatId)
  }
  // if (callbackData === 'back') {
  //   deleteMessage(bot, chatId, currentMessageId)
  // } else if (restaurantsDescriptions[callbackData]) {
  //   sendRestaurantInfo(bot, chatId, callbackData)
  // } else if (roomsDescriptions[callbackData]) {
  //   sendRoomInfo(bot, chatId, callbackData, mediaGroupIdsToDelete)
  // } else if (callbackData === 'deleteMediaGroup') {
  //   deleteMediaGroup(bot, chatId, currentMessageId, mediaGroupIdsToDelete)
  // } else if (specialOffersDescription[callbackData]) {
  //   sendSpecialOfferInfo(bot, chatId, callbackData)
  // } else if (infrastructureDescriptions[callbackData]) {
  //   sendInfrastructureInfo(bot, chatId, callbackData)
  // } else if (spaDescriptions[callbackData]) {
  //   sendSpaDescription(bot, chatId, callbackData)
  // }

  // Убираем сообщение о нажатии на кнопку
  bot.answerCallbackQuery(callbackQuery.id);
});





