const sendAbout = require('./components/about');
const { sendWithLoading, hideMainMenu, checkUserAndSendWithLoading } = require('./components/commomFunctions');
const { sendRestaurantsList, sendRestaurantInfo } = require('./components/fnb');
const sendHotelLocation = require('./components/hotelLocation');
const { sendInfrastructureList, sendInfrastructureInfo } = require('./components/infrastructure');
const { sendEngeners, sengHousekeeping } = require('./components/requests');
const { sendPlatformsForReview, getReview } = require('./components/review');
const { sendRoomsList, sendRoomInfo } = require('./components/rooms');
const { sendServicesList, sendServiceDescription } = require('./components/services');
const { checkIfRegistered } = require('./components/signUp');
const { sendSpaInfo, sendSpaDescription } = require('./components/spa');
const { sendSpecialOffers, sendSpecialOfferInfo } = require('./components/specialOffers');
const sendMainMenu = require('./components/start');
const sendPromotion = require('./components/sendPromotion');
const { sendSurroundingsList, sendSurrounding, sendExactSurrounding } = require('./components/surround');
const handleManagerBotMessage = require('../managerBot/components/managerBotMessageHandler')
const { infrastructureDescriptions } = require('./texts/infrastructureTexts');
const keyRequests = require('./texts/keyRequests');
const regexMenuButtons = require('./texts/regexMenuButtons');
const { restaurantsDescriptions } = require('./texts/restaurantsText');
const { roomsDescriptions } = require('./texts/roomsText');
const { servicesDescription } = require('./texts/servicesText');
const { spaDescriptions } = require('./texts/spaTexts');
const { specialOffersDescription } = require('./texts/specialOffersText');
const { surroundingsDescriptions } = require('./texts/surroundText');
const startTexts = require('./texts/startTexts');
const roomsTitles = Object.values(roomsDescriptions).filter(room => room.isActive).map(room => room.title)
const roomsRegex = new RegExp(`^(${roomsTitles.join('|')})$`);
const restaurantsTitles = Object.values(restaurantsDescriptions).filter(restaurant => restaurant.isActive).map(restaurant => restaurant.title)
const restaurantsRegex = new RegExp(`^(${restaurantsTitles.join('|')})$`)
const specialOffersTitles = Object.values(specialOffersDescription).filter(offer => offer.isActive).map(offer => offer.title)
const specialOffersRegex = new RegExp(`^(${specialOffersTitles.join('|')})$`);
const infrastructuresTitles = Object.values(infrastructureDescriptions).map(infrastructure => infrastructure.title)
const infrastructuresRegex = new RegExp(`^(${infrastructuresTitles.join('|')})$`)
const spaTitles = Object.values(spaDescriptions).filter(spa => spa.isActive).map(spa => spa.title)
const spaRegex = new RegExp(`^(${spaTitles.join('|')})$`)
const servicesTitles = Object.values(servicesDescription).filter(service => service.isActive).map(service => service.title)
const servicesRegex = new RegExp(`^(${servicesTitles.join('|')})$`)
const surroundingsTitles = Object.values(surroundingsDescriptions).filter(surrounding => surrounding.isActive).map(surrounding => surrounding.title)
const surroundingsRegex = new RegExp(`^(${surroundingsTitles.join('|')})$`)
const surroundingsTitlesAll = Object.values(surroundingsDescriptions).flatMap(section => Object.values(section.items).filter(item => item.isActive).map(item => item.title))
const surroundingsTitlesAllRegEx = new RegExp(`^(${surroundingsTitlesAll.join('|')})$`)

const managerChatId = 317138824
// const userStates = {}

// const setUserState = (chatId, keyRequest) => {
//   userStates[chatId] = keyRequest
// }

// const getKeyRequest = (chatId) => {
//   return userStates[chatId] || ''
// }


const User = require('../db/models/user');
const { userStates, setKeyRequest, getKeyRequest, createLocalUser } = require('./components/currentUsers');
const sendWeeklyGroup = require('./components/weeklyGroup');

const startMainBot = (mainBot, managerBot) => {

  mainBot.setMyCommands([
    { command: '/start', description: startTexts.show_menu },
  ]);

  mainBot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;
  
    sendPromotion(chatId)

    if (/\/start/.test(text)) {
      sendWithLoading(mainBot, chatId, sendMainMenu)

      User.findOne({chatId: chatId})
      .then(user => {
        if (user) {
          console.log('Пользователь уже существует', userStates); //check here if exist in userStates
          createLocalUser(user)


          return
        } else {
          User.create({chatId: chatId, keyRequest: '', lastname: '', name: '', room: '', arrival: '', departure: '' })
            .then(user => {
              createLocalUser(user)

            })
        }
      })
    } 
    else if (regexMenuButtons.main_menu.test(text)) {
      setKeyRequest(chatId, keyRequests.main_menu)
      const keyRequest = getKeyRequest(chatId)
      sendWithLoading(mainBot, chatId, sendMainMenu, keyRequest)
    } 
    else if (regexMenuButtons.hide_menu.test(text)) {
      hideMainMenu(mainBot, chatId)
    } 
    else if (regexMenuButtons.sign_in.test(text)) {
      setKeyRequest(chatId, keyRequests.sign_in)
      const keyRequest = getKeyRequest(chatId)
      sendWithLoading(mainBot, chatId, checkIfRegistered)
    } 
    else if (regexMenuButtons.about_hotel.test(text)) {
      setKeyRequest(chatId, keyRequests.about_hotel)
      const keyRequest = getKeyRequest(chatId)
      sendWithLoading(mainBot, chatId, sendAbout, keyRequest)
    } 
    else if (regexMenuButtons.rooms.test(text)) {
      setKeyRequest(chatId, keyRequests.room)
      const keyRequest = getKeyRequest(chatId)
      sendWithLoading(mainBot, chatId, sendRoomsList, keyRequest)
    } 
    else if (roomsRegex.test(text)) {
      const roomTitle = msg.text; // Тайтл комнаты из сообщения
      // Ищем комнату в списке по тайтлу
      const callback = Object.values(roomsDescriptions).find(value => value.title === roomTitle);
      sendWithLoading(mainBot, chatId, sendRoomInfo, callback)
    } 
    else if (regexMenuButtons.engeneers.test(text)) {
      setKeyRequest(chatId, keyRequests.engeneers)
      const keyRequest = getKeyRequest(chatId)
      checkUserAndSendWithLoading(mainBot, chatId, sendEngeners, keyRequest)
    } 
    else if (regexMenuButtons.housekeeping.test(text)) {
      setKeyRequest(chatId, keyRequests.housekeeping)
      const keyRequest = getKeyRequest(chatId)
      checkUserAndSendWithLoading(mainBot, chatId, sengHousekeeping, keyRequest)
    } 
    else if (regexMenuButtons.restaurants.test(text)) {
      setKeyRequest(chatId, keyRequests.restaurants)
      const keyRequest = getKeyRequest(chatId)
      sendWithLoading(mainBot, chatId, sendRestaurantsList, keyRequest)
    } 
    else if (restaurantsRegex.test(text)) {
      const restaurantTitle = msg.text
      const callback = Object.values(restaurantsDescriptions).find(value => value.title === restaurantTitle)
      sendWithLoading(mainBot, chatId, sendRestaurantInfo, callback)
    } 
    else if (regexMenuButtons.special_offers.test(text)) {
      setKeyRequest(chatId, keyRequests.special_offers)
      const keyRequest = getKeyRequest(chatId)
      sendWithLoading(mainBot, chatId, sendSpecialOffers, keyRequest)
    } 
    else if (specialOffersRegex.test(text)) {
      const specialOfferTitle = msg.text
      const callback = Object.values(specialOffersDescription).find(value => value.title === specialOfferTitle)
      sendWithLoading(mainBot, chatId, sendSpecialOfferInfo, callback)
    } 
    else if (regexMenuButtons.infrastructure.test(text)) {
      setKeyRequest(chatId, keyRequests.infrastructure)
      const keyRequest = getKeyRequest(chatId)
      sendWithLoading(mainBot, chatId, sendInfrastructureList, keyRequest)
    } 
    else if (regexMenuButtons.weeklyGroup.test(text)) {
      setKeyRequest(chatId, keyRequests.weeklyGroup)
      const keyRequest = getKeyRequest(chatId)
      sendWithLoading(mainBot, chatId, sendWeeklyGroup, keyRequest)
    }
    else if (infrastructuresRegex.test(text)) {
      const infrastructureTitle = msg.text
      const callback = Object.values(infrastructureDescriptions).find(value => value.title === infrastructureTitle)
      sendWithLoading(mainBot, chatId, sendInfrastructureInfo, callback)
    } 
    else if (regexMenuButtons.spa.test(text)) { 
      setKeyRequest(chatId, keyRequests.spa)
      const keyRequest = getKeyRequest(chatId)
      sendWithLoading(mainBot, chatId, sendSpaInfo, keyRequest)
    } 
    else if (spaRegex.test(text)) {
      const spaTitle = msg.text
      const callback = Object.values(spaDescriptions).find(value => value.title === spaTitle)
      sendWithLoading(mainBot, chatId, sendSpaDescription, callback)
    } 
    else if (regexMenuButtons.location.test(text)) {
      setKeyRequest(chatId, keyRequests.location)
      const keyRequest = getKeyRequest(chatId)
      sendWithLoading(mainBot, chatId, sendHotelLocation, keyRequest)
    } 
    else if (regexMenuButtons.services.test(text)) {
      setKeyRequest(chatId, keyRequests.services)
      const keyRequest = getKeyRequest(chatId)
      checkUserAndSendWithLoading(mainBot, chatId, sendServicesList, keyRequest)
    } 
    else if (servicesRegex.test(text)) {
      const serviceTitle = msg.text
      const callback = Object.values(servicesDescription).find(value => value.title === serviceTitle)
      setKeyRequest(chatId, callback.keyRequest)
      const keyRequest = getKeyRequest(chatId)
      checkUserAndSendWithLoading(mainBot, chatId, sendServiceDescription, callback)
    } 
    else if (regexMenuButtons.review.test(text)) {
      setKeyRequest(chatId, keyRequests.review)
      const keyRequest = getKeyRequest(chatId)
      checkUserAndSendWithLoading(mainBot, chatId, sendPlatformsForReview, keyRequest)
    } 
    else if (regexMenuButtons.surroundings.test(text)) {
      setKeyRequest(chatId, keyRequests.surroundings)
      const keyRequest = getKeyRequest(chatId)
      sendWithLoading(mainBot, chatId, sendSurroundingsList, keyRequest)
    } 
    else if (surroundingsRegex.test(text)) {
      const surroundingTitle = msg.text
      const callback = Object.values(surroundingsDescriptions).find(value => value.title === surroundingTitle)
      sendWithLoading(mainBot, chatId, sendSurrounding, callback)
    } 
    else if (surroundingsTitlesAllRegEx.test(text)) {
      const surroundingTitle = msg.text
      const callback = Object.values(surroundingsDescriptions).flatMap(section => Object.values(section.items)).find(item => item.title === surroundingTitle)
      sendWithLoading(mainBot, chatId, sendExactSurrounding, callback)
    } 
    else {
      const keyRequest = getKeyRequest(chatId)
      const guestDetails = userStates[chatId]
      if (keyRequest === keyRequests.housekeeping) {
        const messageData = handleManagerBotMessage(msg, guestDetails, keyRequest)
        managerBot.sendMessage(managerChatId, messageData)
        setKeyRequest(chatId, '')
      } else if (keyRequest === keyRequests.engeneers) {
        const messageData = handleManagerBotMessage(msg, keyRequest)
        managerBot.sendMessage(managerChatId, messageData)
        setKeyRequest(chatId, '')
      } else if (keyRequest === keyRequests.review) {
        getReview(mainBot, managerBot, chatId, msg)
        setKeyRequest(chatId, '')
      } else if (keyRequest === keyRequests.sign_in) {
        const messageData = handleManagerBotMessage(msg, guestDetails, keyRequest)
        managerBot.sendMessage(managerChatId, messageData)
        setKeyRequest(chatId, '')
      } else if (keyRequest === keyRequests.transportation) {
        const messageData = handleManagerBotMessage(msg, keyRequest)
        managerBot.sendMessage(managerChatId, messageData)
        setKeyRequest(chatId, '')
      } else if (keyRequest === keyRequests.wake_up_call) {
        const messageData = handleManagerBotMessage(msg, keyRequest)
        managerBot.sendMessage(managerChatId, messageData)
        setKeyRequest(chatId, '')
      } else if (keyRequest === keyRequests.breakfast_box) {
        const messageData = handleManagerBotMessage(msg, keyRequest)
        managerBot.sendMessage(managerChatId, messageData)
        setKeyRequest(chatId, '')
      } else if (keyRequest === keyRequests.luggage) {
        const messageData = handleManagerBotMessage(msg, keyRequest)
        managerBot.sendMessage(managerChatId, messageData)
        setKeyRequest(chatId, '')
      } else {
        const messageData = handleManagerBotMessage(msg, keyRequest)
        managerBot.sendMessage(managerChatId, messageData)
        setKeyRequest(chatId, '')
      }
    }
  })

}



module.exports = {startMainBot}