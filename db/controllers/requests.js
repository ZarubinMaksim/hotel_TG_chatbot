const Request = require('../models/requests')

const saveRequest = async (chatId, msg, guestDetails) => {
  const savedRequest = await Request.create({
    chatId: chatId,
    request: msg.text,
    department: guestDetails.keyRequest,
    room: guestDetails.room,
    lastname: guestDetails.lastname,
    name: guestDetails.name,
    arrival: guestDetails.arrival,
    departure: guestDetails.departure,
    status: null,
  })

  if (savedRequest) {
    console.log('SAVED IN DB!!!!')
  } else {
    console.log('ERROR SAVED IN DB')
  }
}

module.exports = { saveRequest }