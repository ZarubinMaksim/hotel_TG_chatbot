const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  chatId: {
    type: String,
    required: true,
  },
  keyRequest: {
    type: String,
  },
  lastname: {
    type: String,
  },
  name: {
    type: String,
  },
  room: {
    type: String,
  },
  arrival: {
    type: String,
  },
  departure: {
    type: String,
  }

})

module.exports = mongoose.model('user', userSchema)