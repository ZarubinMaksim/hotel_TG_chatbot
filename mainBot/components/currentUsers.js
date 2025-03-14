const userStates = {}
const User = require('../../db/models/user')

// функция на случай перезапуска приложения чтобы локальные поьзователи обновились
const syncUserStates = async () => {
  try {
    const usersFromDB = await User.find()
    Object.keys(userStates).forEach(key => delete userStates[key]);

    usersFromDB.forEach(user => {
      if (!userStates[user.chatId]) {
        userStates[user.chatId] = {
          chatId: user.chatId,
          keyRequest: user.keyRequest || '',
          lastname: user.lastname || '',
          name: user.name || '',
          room: user.room || '',
          arrival: user.arrival || '',
          departure: user.departure || ''
        }
      }
    })
  } 
  catch (error) {
    console.log(error)
  }
}

const createLocalUser = (user) => {
  userStates[user.chatId] = {
    chatId: user.chatId,
    keyRequest: user.keyRequest,
    lastname: user.lastname,
    name: user.name,
    room: user.room,
    arrival: user.arrival,
    departure: user.departure
  }
}

const setKeyRequest = (chatId, keyRequest) => {
  userStates[chatId].keyRequest = keyRequest
}

const getKeyRequest = (chatId) => {
  return userStates[chatId].keyRequest || ''
}

module.exports = {userStates, createLocalUser, setKeyRequest, getKeyRequest, syncUserStates}