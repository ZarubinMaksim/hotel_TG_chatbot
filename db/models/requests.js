const mongoose = require('mongoose')

const requestSchema = new mongoose.Schema({
  chatId: {
    type: String,
    required: true,
  },
  hotelName: {
    type: String,
    required: true,
  },
  request: {
    type: String,
    required: true,
  },
  department: {
    type: String,
  },
  room: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  arrival: {
    type: String,
  },
  departure: {
    type: String,
  },
  replyMsg: {
    type: String,
  },
  status: {
    type: String,
  },
  receiveDate: {
    type: String,
  }
})

module.exports = mongoose.model('request', requestSchema);