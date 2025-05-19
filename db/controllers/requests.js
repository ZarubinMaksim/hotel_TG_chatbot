const Request = require('../models/requests')

const saveRequest = async (chatId, msg, guestDetails, replyMsg) => {
  
  const now = new Date();
  const day = String(now.getDate()).padStart(2, '0');
  const month = now.toLocaleString('en-US', { month: 'short' });
  const year = now.getFullYear();
  const time = now.toTimeString().slice(0, 8);
  const formatted = `${day} ${month} ${year} ${time}`;


  const savedRequest = await Request.create({
    chatId: chatId,
    request: msg.text,
    department: guestDetails.keyRequest,
    room: guestDetails.room,
    lastname: guestDetails.lastname,
    name: guestDetails.name,
    arrival: guestDetails.arrival,
    departure: guestDetails.departure,
    replyMsg: replyMsg,
    status: 'Pending',
    receiveDate: formatted,
  })

  if (savedRequest) {
    console.log('SAVED IN DB!!!!')
  } else {
    console.log('ERROR SAVED IN DB')
  }
}

module.exports = { saveRequest }