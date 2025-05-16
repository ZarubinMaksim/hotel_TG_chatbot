// ==== Configurations ====
const { keyRequests, regexMenuButtons } = require("../config/appItems");
// ==== User management ====
const User = require("../../db/models/user")
const { setKeyRequest, getKeyRequest, userStates, createLocalUser } = require("./currentUsers")
const { checkIfRegistered } = require("./signUp")
// ==== Common utilities ====
const { sendWithLoading, hideMainMenu, checkUserAndSendWithLoading } = require("./commomFunctions")
const sendMainMenu = require("./start")
const sendHotelLocation = require("./hotelLocation")
const { sendPlatformsForReview } = require("./review")
// ==== About section ====
const sendAbout = require("./about")
// ==== Service requests (engineers, housekeeping, etc.) ====
const { sendEngeners, sendHousekeeping } = require("./requests")
// ==== Weekly group activities ====
const sendWeeklyGroup = require("./weeklyGroup")
// ==== Car rental service ====
const sendCarRent = require("./carRent")
// ==== Rooms ====
const { sendRoomsList, sendRoomInfo } = require("./rooms")
const { roomsDescriptions } = require("../texts/roomsText")
const roomsTitles = Object.values(roomsDescriptions)
  .filter(room => room.isActive)
  .map(room => room.title)
const roomsRegex = new RegExp(`^(${roomsTitles.join('|')})$`)
// ==== Restaurants ====
const { sendRestaurantsList, sendRestaurantInfo, sendRoomDiningMenu } = require("./fnb")
const { restaurantsDescriptions } = require("../texts/restaurantsText")
const restaurantsTitles = Object.values(restaurantsDescriptions)
  .filter(restaurant => restaurant.isActive)
  .map(restaurant => restaurant.title)
const restaurantsRegex = new RegExp(`^(${restaurantsTitles.join('|')})$`)
// ==== Special offers ====
const { sendSpecialOffers, sendSpecialOfferInfo } = require("./specialOffers")
const { specialOffersDescription } = require("../texts/specialOffersText")
const specialOffersTitles = Object.values(specialOffersDescription)
  .filter(offer => offer.isActive)
  .map(offer => offer.title)
const specialOffersRegex = new RegExp(`^(${specialOffersTitles.join('|')})$`)
// ==== Infrastructure ====
const { sendInfrastructureList, sendInfrastructureInfo } = require("./infrastructure")
const { infrastructureDescriptions } = require("../texts/infrastructureTexts")
const infrastructuresTitles = Object.values(infrastructureDescriptions)
  .map(infrastructure => infrastructure.title)
const infrastructuresRegex = new RegExp(`^(${infrastructuresTitles.join('|')})$`)
// ==== Spa services ====
const { sendSpaInfo, sendSpaDescription, sendSpaOffer } = require("./spa")
const { spaDescriptions } = require("../texts/spaTexts")
const spaTitles = Object.values(spaDescriptions)
  .filter(spa => spa.isActive)
  .map(spa => spa.title)
const spaRegex = new RegExp(`^(${spaTitles.join('|')})$`)
const spaTitlesAll = Object.values(spaDescriptions)
  .flatMap(section => section.offers 
    ? Object.values(section.offers).filter(offer => offer.isActive).map(offer => offer.title) 
    : [])
const spaTitlesAllRegEx = new RegExp(`^(${spaTitlesAll.join('|')})$`)
// ==== Services (e.g. babysitting, laundry) ====
const { sendServicesList, sendServiceDescription } = require("./services")
const { servicesDescription } = require("../texts/servicesText")
const servicesTitles = Object.values(servicesDescription)
  .filter(service => service.isActive)
  .map(service => service.title)
const servicesRegex = new RegExp(`^(${servicesTitles.join('|')})$`)
// ==== Surroundings (attractions nearby) ====
const { sendSurroundingsList, sendSurrounding, sendExactSurrounding } = require("./surround")
const { surroundingsDescriptions } = require("../texts/surroundText")
const requestDescriptions = require("../texts/requestsText")
const surroundingsTitles = Object.values(surroundingsDescriptions)
  .filter(surrounding => surrounding.isActive)
  .map(surrounding => surrounding.title)
const surroundingsRegex = new RegExp(`^(${surroundingsTitles.join('|')})$`)
const surroundingsTitlesAll = Object.values(surroundingsDescriptions)
  .flatMap(section => 
    Object.values(section.items)
      .filter(item => item.isActive)
      .map(item => item.title))
const surroundingsTitlesAllRegEx = new RegExp(`^(${surroundingsTitlesAll.join('|')})$`)

//Menu button logic
const regexHandlers = [
  //MAIN MENU
  { 
    regex: regexMenuButtons.main_menu,
    action: async (bot, chatId) => {
      setKeyRequest(chatId, keyRequests.main_menu)
      const keyRequest = getKeyRequest(chatId)
      await sendWithLoading(bot, chatId, sendMainMenu, keyRequest)
    }
  },
  //HIDE MENU
  {
    regex: regexMenuButtons.hide_menu,
    action: async (bot, chatId) => {
      hideMainMenu(bot, chatId)
    }
  },
  //SIGN IN
  {
    regex: regexMenuButtons.sign_in,
    action: async (bot, chatId) => {
      setKeyRequest(chatId, keyRequests.sign_in)
      const keyRequest = getKeyRequest(chatId)
      await sendWithLoading(bot, chatId, checkIfRegistered, keyRequest)
    }
  },
  //ABOUT
  {
    regex: regexMenuButtons.about_hotel,
    action: async (bot, chatId) => {
      setKeyRequest(chatId, keyRequests.about_hotel)
      const keyRequest = getKeyRequest(chatId)
      await sendWithLoading(bot, chatId, sendAbout, keyRequest)
    }
  },
  //ROOMS
  {
    regex: regexMenuButtons.rooms,
    action: async (bot, chatId) => {
      setKeyRequest(chatId, keyRequests.rooms)
      const keyRequest = getKeyRequest(chatId)
      await sendWithLoading(bot, chatId, sendRoomsList, keyRequest)
    }
  },
  //ROOMS LIST
  {
    regex: roomsRegex,
    action: async (bot, chatId, msg) => {
      const roomTitle = msg.text; // Тайтл комнаты из сообщения
      const callback = Object.values(roomsDescriptions).find(value => value.title === roomTitle);
      await sendWithLoading(bot, chatId, sendRoomInfo, callback)
    }
  },
  //REQUESTS-ENG
  {
    regex: regexMenuButtons.engineer,
    action: async (bot, chatId, msg) => {
      setKeyRequest(chatId, keyRequests.engineer)
      const keyRequest = getKeyRequest(chatId)
      await checkUserAndSendWithLoading(bot, chatId, sendEngeners, keyRequest)
    }
  },
  //REQUESTS-HK
  {
    regex: regexMenuButtons.housekeeping,
    action: async (bot, chatId, msg) => {
      setKeyRequest(chatId, keyRequests.housekeeping)
      const keyRequest = getKeyRequest(chatId)
      await checkUserAndSendWithLoading(bot, chatId, sendHousekeeping, keyRequest)
    }
  },
  //RESTAURANTS LIST
  {
    regex: regexMenuButtons.restaurants,
    action: async (bot, chatId) => {
      setKeyRequest(chatId, keyRequests.restaurants)
      const keyRequest = getKeyRequest(chatId)
      await sendWithLoading(bot, chatId, sendRestaurantsList, keyRequest)
    }
  },
  //RESTAURANT INFO
  {
    regex: restaurantsRegex,
    action: async (bot, chatId, msg) => {
      const restaurantTitle = msg.text
      const callback = Object.values(restaurantsDescriptions).find(value => value.title === restaurantTitle)
      await sendWithLoading(bot, chatId, sendRestaurantInfo, callback);
    }
  },
  //ROOM SERVICE
  {
    regex: regexMenuButtons.roomService,
    action: async (bot, chatId, msg, guestDetails) => {
      const encodedGuestDetails = encodeURIComponent(JSON.stringify(guestDetails));
      await sendWithLoading(bot, chatId, sendRoomDiningMenu, encodedGuestDetails);
    }
  },
  //SPECIL OFFERS
  {
    regex: regexMenuButtons.special_offers,
    action: async (bot, chatId) => {
      setKeyRequest(chatId, keyRequests.special_offers)
      const keyRequest = getKeyRequest(chatId)
      await sendWithLoading(bot, chatId, sendSpecialOffers, keyRequest)
    }
  },
  //SPECIAL OFFER INFO
  {
    regex: specialOffersRegex,
    action: async (bot, chatId, msg) => {
      const specialOfferTitle = msg.text
      const callback = Object.values(specialOffersDescription).find(value => value.title === specialOfferTitle)
      await sendWithLoading(bot, chatId, sendSpecialOfferInfo, callback)
    }
  },
  //INFRASTRUCTURES LIST
  {
    regex: regexMenuButtons.infrastructure,
    action: async (bot, chatId) => {
      setKeyRequest(chatId, keyRequests.infrastructure)
      const keyRequest = getKeyRequest(chatId)
      await sendWithLoading(bot, chatId, sendInfrastructureList, keyRequest)
    }
  },
  // INFRASTRUCTURE INFO
  {
    regex: infrastructuresRegex,
    action: async (bot, chatId, msg) => {
      const infrastructureTitle = msg.text
      const callback = Object.values(infrastructureDescriptions).find(value => value.title === infrastructureTitle)
      await sendWithLoading(bot, chatId, sendInfrastructureInfo, callback)
    }
  },
  //ACTIVITIES
  {
    regex: regexMenuButtons.weeklyGroup,
    action: async (bot, chatId) => {
      setKeyRequest(chatId, keyRequests.weeklyGroup)
      const keyRequest = getKeyRequest(chatId)
      await sendWithLoading(bot, chatId, sendWeeklyGroup, keyRequest)
    }
  },
  //CAR RENT
  {
    regex: regexMenuButtons.car_rent,
    action: async (bot, chatId) => {
      setKeyRequest(chatId, keyRequests.car_rent)
      const keyRequest = getKeyRequest(chatId)
      await sendWithLoading(bot, chatId, sendCarRent, keyRequest)
    }
  },
  //SPA
  {
    regex: regexMenuButtons.spa,
    action: async (bot, chatId) => {
      setKeyRequest(chatId, keyRequests.spa)
      const keyRequest = getKeyRequest(chatId)
      await sendWithLoading(bot, chatId, sendSpaInfo, keyRequest)
    }
  },
  //SPA INFO
  {
    regex: spaRegex,
    action: async (bot, chatId, msg) => {
      const spaTitle = msg.text
      const callback = Object.values(spaDescriptions).find(value => value.title === spaTitle)
      await sendWithLoading(bot, chatId, sendSpaDescription, callback)
    }
  },
  //SPA OFFERS INFO
  {
    regex: spaTitlesAllRegEx,
    action: async (bot, chatId, msg) => {
      const spaOfferTitle = msg.text
      const callback = Object.values(spaDescriptions).flatMap(section => section.offers ? Object.values(section.offers) : []).find(offer => offer.title === spaOfferTitle);      
      await sendWithLoading(bot, chatId, sendSpaOffer, callback)
    }
  },
  //LOCATION
  {
    regex: regexMenuButtons.location,
    action: async (bot, chatId) => {
      setKeyRequest(chatId, keyRequests.location)
      const keyRequest = getKeyRequest(chatId)
      await sendWithLoading(bot, chatId, sendHotelLocation, keyRequest)
    }
  },
  //SERVICES
  {
    regex: regexMenuButtons.services,
    action: async (bot, chatId, msg) => {
      setKeyRequest(chatId, keyRequests.services)
      const keyRequest = getKeyRequest(chatId)
      await checkUserAndSendWithLoading(bot, chatId, sendServicesList, keyRequest)
    }
  },
  //SERVICES INFO
  {
    regex: servicesRegex,
    action: async (bot, chatId, msg) => {
      const serviceTitle = msg.text
      const callback = Object.values(servicesDescription).find(value => value.title === serviceTitle)
      setKeyRequest(chatId, callback.keyRequest)
      const keyRequest = getKeyRequest(chatId)
      await checkUserAndSendWithLoading(bot, chatId, sendServiceDescription, callback)
    }
  },
  //REVIEW
  {
    regex: regexMenuButtons.leave_review,
    action: async (bot, chatId, msg) => {
      setKeyRequest(chatId, keyRequests.leave_review)
      const keyRequest = getKeyRequest(chatId)
      await checkUserAndSendWithLoading(bot, chatId, sendPlatformsForReview, keyRequest)
    }
  },
  //SURROUNDINGS LIST
  {
    regex: regexMenuButtons.surroundings,
    action: async (bot, chatId) => {
      setKeyRequest(chatId, keyRequests.surroundings)
      const keyRequest = getKeyRequest(chatId)
      await sendWithLoading(bot, chatId, sendSurroundingsList, keyRequest)
    }
  },
  //SURROUNDING OPTIONS
  {
    regex: surroundingsRegex,
    action: async (bot, chatId, msg) => {
      const surroundingTitle = msg.text
      const callback = Object.values(surroundingsDescriptions).find(value => value.title === surroundingTitle)
      await sendWithLoading(bot, chatId, sendSurrounding, callback)
    }
  },
  //SURROUNDING INFO
  {
    regex: surroundingsTitlesAllRegEx,
    action: async (bot, chatId, msg) => {
      const surroundingTitle = msg.text
      const callback = Object.values(surroundingsDescriptions).flatMap(section => Object.values(section.items)).find(item => item.title === surroundingTitle)
      await sendWithLoading(bot, chatId, sendExactSurrounding, callback)
    }
  },
  //START
  {
    regex: /\/start/,
    action: async (bot, chatId, msg) => {
      await sendWithLoading(bot, chatId, sendMainMenu, msg.text);
      // if user already exist in DB create local copy 
      try {
        const currentUser = await User.findOne({chatId: chatId});
        if (currentUser) {
          createLocalUser(currentUser);
          return;
        } else {
          const newUser = await User.create({
            chatId: chatId, 
            keyRequest: '', 
            lastname: '', 
            name: '', 
            room: '', 
            arrival: '', 
            departure: '',
          });
          if (newUser) {
            createLocalUser(newUser);
          }
        }
      } catch (error) {
        console.error('Failed to create user', error)
      }
    },
  },
];

const replyMap = {
  [keyRequests.housekeeping]: requestDescriptions.housekeeping.userReplyMsg,
  [keyRequests.engineer]: requestDescriptions.engineer.userReplyMsg,
  [keyRequests.sign_in]: requestDescriptions.sign_in.userReplyMsg,
  [keyRequests.transportation]: servicesDescription.transportation.userReplyMsg,
  [keyRequests.wake_up_call]: servicesDescription.wake_up_call.userReplyMsg,
  [keyRequests.breakfastBox]: servicesDescription.breakfastBox.userReplyMsg,
  [keyRequests.luggageDown]: servicesDescription.luggageDown.userReplyMsg,
  [keyRequests.car_rent]: requestDescriptions.car_rent.userReplyMsg,
}

module.exports = { regexHandlers, replyMap };
