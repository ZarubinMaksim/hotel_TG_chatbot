require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api');
const {startMainBot} = require('./mainBot/mainBot');
const startManagerBot = require('./managerBot/managerBot');
const mainToken = process.env.MAIN_TOKEN
const managerToken = process.env.MANAGER_TOKEN
const managerBot = new TelegramBot(managerToken, { polling: true })
const mainBot = new TelegramBot(mainToken, { polling: true, parse_mode: "HTML" })

const express = require('express')
const mongoose = require('mongoose');
const { syncUserStates } = require('./mainBot/components/currentUsers');
const app = express()
const cors = require('cors')
// mongoose.connect('mongodb://localhost:27017/laGreenBot')
// mongoose.connect('mongodb://lagreen_user:245064163@38.244.150.204:27017/laGreenBot', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
const uri = 'mongodb://lagreen_user:245064163@38.244.150.204:27017/lagreen_bot';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Successfully connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

const allowedOrigins = [
  'https://www.yunobot.com',
  'https://yunobot.com',
  'http://www.yunobot.com',
  'http://yunobot.com',
  'https://api.yunobot.com/',
  'http://api.yunobot.com/'
]  

app.listen(3000)
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}

app.use(cors(corsOptions));
app.use(express.json());

app.post('/send-order', (req, res) => {
  const {guestDetailsTEMPORARY, data} = req.body
  const orderList = data
  .map(item => `${item.name} - ${item.amount}`)
  .join('\n');
  managerBot.sendMessage(guestDetailsTEMPORARY.chatId, `
    Guest ordered room service!
Guest room - ${guestDetailsTEMPORARY.room}
Guest name - ${guestDetailsTEMPORARY.lastname} ${guestDetailsTEMPORARY.name}
Guest order: 
${orderList} 
  `)
})

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





