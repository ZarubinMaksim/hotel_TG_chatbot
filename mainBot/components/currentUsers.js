const userStates = {}

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

module.exports = {userStates, createLocalUser, setKeyRequest, getKeyRequest}