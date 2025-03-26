const TelegramBot = require('node-telegram-bot-api');
const {startMainBot} = require('./mainBot/mainBot');
const startManagerBot = require('./managerBot/managerBot');
const mainToken = '7641248146:AAENDL-yedY7xYkQcSQdfduibKCMt3VIy28'
const managerToken = '7595558526:AAGVJLInp92m5MH0J-G4eczEfMen4Ma6YHI'
const managerBot = new TelegramBot(managerToken, { polling: true })
const mainBot = new TelegramBot(mainToken, { polling: true, parse_mode: "HTML" })

const express = require('express')
const mongoose = require('mongoose');
const { syncUserStates } = require('./mainBot/components/currentUsers');
const app = express()

mongoose.connect('mongodb://localhost:27017/laGreenBot')


app.listen(3000)

const startApp = async () => {
  await syncUserStates() //синхронизируем при запуске приложения пользователей локально
  await startMainBot(mainBot, managerBot)
  await startManagerBot(mainBot, managerBot, managerToken)
}

startApp()

 



// mainBot.on('callback_query', async (callbackQuery) => {
//   const chatId = callbackQuery.message.chat.id;
//   const callbackData = callbackQuery.data;
//   const currentMessageId = callbackQuery.message.message_id

//   if (callbackData === 'main_menu') {
//     sendMainMenu(mainBot, chatId)
//   }
//   // if (callbackData === 'back') {
//   //   deleteMessage(bot, chatId, currentMessageId)
//   // } else if (restaurantsDescriptions[callbackData]) {
//   //   sendRestaurantInfo(bot, chatId, callbackData)
//   // } else if (roomsDescriptions[callbackData]) {
//   //   sendRoomInfo(bot, chatId, callbackData, mediaGroupIdsToDelete)
//   // } else if (callbackData === 'deleteMediaGroup') {
//   //   deleteMediaGroup(bot, chatId, currentMessageId, mediaGroupIdsToDelete)
//   // } else if (specialOffersDescription[callbackData]) {
//   //   sendSpecialOfferInfo(bot, chatId, callbackData)
//   // } else if (infrastructureDescriptions[callbackData]) {
//   //   sendInfrastructureInfo(bot, chatId, callbackData)
//   // } else if (spaDescriptions[callbackData]) {
//   //   sendSpaDescription(bot, chatId, callbackData)
//   // }

//   // Убираем сообщение о нажатии на кнопку
//   mainBot.answerCallbackQuery(callbackQuery.id);
// });





