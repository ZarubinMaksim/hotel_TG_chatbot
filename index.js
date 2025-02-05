const TelegramBot = require('node-telegram-bot-api')
const token = '7641248146:AAENDL-yedY7xYkQcSQdfduibKCMt3VIy28'
const tokenManager = '7595558526:AAGVJLInp92m5MH0J-G4eczEfMen4Ma6YHI'

const bot = new TelegramBot(token, { polling: true })
module.exports = bot


const managerBot = new TelegramBot(tokenManager, { polling: true })
const mediaGroupIdsToDelete = []
const sendMainMenu = require('./components/start')
const sendAbout = require('./components/about')
const {sendRoomsList, sendRoomInfo} = require('./components/rooms')
const {sendRestaurantsList, sendRestaurantInfo} = require('./components/fnb')
const {sendSpecialOffers, sendSpecialOfferInfo} = require('./components/specialOffers')
const specialOffersDescription = require('./texts/specialOffersText')
const specialOffersTitles = Object.values(specialOffersDescription).filter(offer => offer.isActive).map(offer => offer.title)
const specialOffersRegex = new RegExp(`^(${specialOffersTitles.join('|')})$`);
const { roomsDescriptions } = require('./texts/roomsText')
const roomsTitles = Object.values(roomsDescriptions).map(room => room.title)
const roomsRegex = new RegExp(`^(${roomsTitles.join('|')})$`);
const { restaurantsDescriptions } = require('./texts/restaurantsText')
const restaurantsTitles = Object.values(restaurantsDescriptions).map(restaurant => restaurant.title)
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
const servicesDescription = require('./texts/servicesText')
const { sendEngeners, sengHousekeeping } = require('./components/requests')
const surroundingsTitles = Object.values(surroundingsDescriptions).map(surrounding => surrounding.title)
const surroundingsRegex = new RegExp(`^(${surroundingsTitles.join('|')})$`)
const spaTitles = Object.values(spaDescriptions).map(spa => spa.title)
const spaRegex = new RegExp(`^(${spaTitles.join('|')})$`)
const servicesTitles = Object.values(servicesDescription).map(service => service.title)
const servicesRegex = new RegExp(`^(${servicesTitles.join('|')})$`)
const surroundingsTitlesAll = Object.values(surroundingsDescriptions).flatMap(section => Object.values(section.items).map(item => item.title))
const surroundingsTitlesAllRegEx = new RegExp(`^(${surroundingsTitlesAll.join('|')})$`)
let keyRequest = ''
const managerChatId = 317138824
// ******
    // Показываем всплывающее уведомление
    // bot.answerCallbackQuery(callbackQuery.id, {
    //   show_alert: true,  // Показываем всплывающее окно
    //   text: "Дата выбрана",  // Сообщение, которое будет показано
    // });
// ******

managerBot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  managerBot.sendMessage(chatId, 'this is manager bot')
});

managerBot.on('message', (msg) => {
  const chatId = msg.chat.id;
  if (msg.reply_to_message) {

    // вот тут мы конфирмем что все ок и отправляем на сервер
  } else {
    console.log(chatId)
    managerBot.sendMessage(chatId, 'Error. Are you sure you replying message to confirm registration?')
  }
})

// этот текс можно запихнуть в реквесты и оттуда запрашивать сюда
const handleUnidentifiedMessage = (message) => {
  const messageData = `You have got new message from guest! 
Guest Telegram ID - @${message.from.username},
Guest Name - ${message.from.first_name}
Message - ${message.text}`
  return messageData
}

const handleHskMessage = (message) => {
  const messageData = `🧹⚠️ You have got new request for Housekeeping! ⚠️🧹
Guest Telegram ID - @${message.from.username},
Guest Name - ${message.from.first_name}
Message - ${message.text}`
  return messageData
}

const handleEngMessage = (message) => {
  const messageData = `🔧⚠️ You have got new request for Engeeniring! ⚠️🔧 
Guest Telegram ID - @${message.from.username},
Guest Name - ${message.from.first_name}
Message - ${message.text}`
  return messageData
}

const handleSignInMessage = (message) => {
  const messageData = `Guest wants to sign in! Please reply for this message to confirm. Message shuld be A701/Petrov/21-01-2025

Guest Telegram ID - @${message.from.username},
Guest Name - ${message.from.first_name}
Guest room and lastname - ${message.text}`
  return messageData
}

const handleTransferMessage = (message) => {
  const messageData = `Guest wants to order a trasfet! Please contact guest!

Guest Telegram ID - @${message.from.username},
Guest Name - ${message.from.first_name}
Guest room and lastname - ${message.text}`
  return messageData
}

const handleWakeupMessage = (message) => {
  const messageData = `Guest wants to order a wake up call! Please contact guest!

Guest Telegram ID - @${message.from.username},
Guest Name - ${message.from.first_name}
Guest room and lastname - ${message.text}`
  return messageData
}

const handleBreakfastMessage = (message) => {
  const messageData = `Guest wants to order a brekfast box! Please contact guest!

Guest Telegram ID - @${message.from.username},
Guest Name - ${message.from.first_name}
Guest room and lastname - ${message.text}`
  return messageData
}

const handleLuggageMessage = (message) => {
  const messageData = `Guest needs help with luggage! Please contact guest!

Guest Telegram ID - @${message.from.username},
Guest Name - ${message.from.first_name}
Guest room and lastname - ${message.text}`
  return messageData
}

const sendWithLoading = async(chatId, nextFunction, callback) => {
  try {
    await bot.sendChatAction(chatId, 'typing');
    await nextFunction(bot, chatId, callback)
  } catch (error) {
    console.log('Error', error)
  }
}

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (/\/start/.test(text)) {
    sendWithLoading(chatId, sendMainMenu)
  } 
  else if (/В главное меню 🔙/.test(text)) {
    keyRequest = 'main_menu'
    sendWithLoading(chatId, sendMainMenu)
  } 
  else if (/Register/.test(text)) {
    keyRequest = 'signIn' 
    bot.sendMessage(chatId, 'Для регистрации напишите Номер комнаты и фамилию латинскими буквами')
  } 
  else if (/Об Отеле/.test(text)) {
    keyRequest = 'about_hotel'
    sendWithLoading(chatId, sendAbout)
  } 
  else if (/Наши номера|rooms/.test(text)) {
    keyRequest = 'rooms'
    sendWithLoading(chatId, sendRoomsList)
  } 
  else if (roomsRegex.test(text)) {
    const roomTitle = msg.text; // Тайтл комнаты из сообщения
    // Ищем комнату в списке по тайтлу
    const callback = Object.values(roomsDescriptions).find(value => value.title === roomTitle);
    sendWithLoading(chatId, sendRoomInfo, callback)
  } 
  else if (/🛠 Что-то не работает|engineer/.test(text)) {
    keyRequest = 'Eng'
    sendWithLoading(chatId, sendEngeners)
  } 
  else if (/🧹 Нужна уборка|cleaning/.test(text)) {
    keyRequest = 'hsk'
    sendWithLoading(chatId, sengHousekeeping)
  } 
  else if (/Рестораны|restaurants/.test(text)) {
    keyRequest = 'restaurants'
    sendWithLoading(chatId, sendRestaurantsList)
  } 
  else if (restaurantsRegex.test(text)) {
    const restaurantTitle = msg.text
    const callback = Object.values(restaurantsDescriptions).find(value => value.title === restaurantTitle)
    sendWithLoading(chatId, sendRestaurantInfo, callback)
  } 
  else if (/Спецпредложения|special/.test(text)) {
    keyRequest = 'offers'
    sendWithLoading(chatId, sendSpecialOffers)
  } 
  else if (specialOffersRegex.test(text)) {
    const specialOfferTitle = msg.text
    const callback = Object.values(specialOffersDescription).find(value => value.title === specialOfferTitle)
    sendWithLoading(chatId, sendSpecialOfferInfo, callback)
  } 
  else if (/Инфраструктура|infrastructure/.test(text)) {
    keyRequest = 'infrastructure'
    sendWithLoading(chatId, sendInfrastructureList)
  } 
  else if (infrastructuresRegex.test(text)) {
    const infrastructureTitle = msg.text
    const callback = Object.values(infrastructureDescriptions).find(value => value.title === infrastructureTitle)
    sendWithLoading(chatId, sendInfrastructureInfo, callback)
  } 
  else if (/Спа|spa/.test(text)) { 
    keyRequest = 'spa'
    sendWithLoading(chatId, sendSpaInfo)
  } 
  else if (spaRegex.test(text)) {
    const spaTitle = msg.text
    const callback = Object.values(spaDescriptions).find(value => value.title === spaTitle)
    sendWithLoading(chatId, sendSpaDescription, callback)
  } 
  else if (/Геолокация|location/.test(text)) {
    keyRequest = 'location'
    sendWithLoading(chatId, sendHotelLocation)
  } 
  else if (/Услуги|services/.test(text)) {
    keyRequest = 'services'
    sendWithLoading(chatId, sendServicesList)
  } 
  else if (servicesRegex.test(text)) {
    const serviceTitle = msg.text
    const callback = Object.values(servicesDescription).find(value => value.title === serviceTitle)
    keyRequest = callback.keyRequest
    sendWithLoading(chatId, sendServiceDescription, callback)
  } 
  else if (/Оставить отзыв|review/.test(text)) {
    keyRequest = 'review'
    sendWithLoading(chatId, sendPlatformsForReview)
  } 
  else if (/(Что рядом|surroundings|Назад к выбору\s*🔙)$/i.test(text)) {
    keyRequest = 'surroundings'
    sendWithLoading(chatId, sendSurroundingsList)
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
    if (keyRequest === 'hsk') {
      const messageData = handleHskMessage(msg)
      managerBot.sendMessage(managerChatId, messageData)
      keyRequest = ''
    } else if (keyRequest === 'Eng') {
      const messageData = handleEngMessage(msg)
      managerBot.sendMessage(managerChatId, messageData)
      keyRequest = ''
    } else if (keyRequest === 'review') {
      getReview(bot,managerBot, chatId, msg)
      keyRequest = ''
    } else if (keyRequest === 'signIn') {
      const messageData = handleSignInMessage(msg)
      managerBot.sendMessage(managerChatId, messageData)
      keyRequest = ''
    } else if (keyRequest === 'transfer') {
      const messageData = handleTransferMessage(msg)
      managerBot.sendMessage(managerChatId, messageData)
      keyRequest = ''
    } else if (keyRequest === 'wakeup') {
      const messageData = handleWakeupMessage(msg)
      managerBot.sendMessage(managerChatId, messageData)
      keyRequest = ''
    } else if (keyRequest === 'breakfast_box') {
      const messageData = handleBreakfastMessage(msg)
      managerBot.sendMessage(managerChatId, messageData)
      keyRequest = ''
    } else if (keyRequest === 'luggage_service') {
      const messageData = handleLuggageMessage(msg)
      managerBot.sendMessage(managerChatId, messageData)
      keyRequest = ''
    } else {
      const messageData = handleUnidentifiedMessage(msg)
      managerBot.sendMessage(managerChatId, messageData)
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





