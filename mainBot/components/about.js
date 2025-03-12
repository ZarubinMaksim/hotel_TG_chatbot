//rewieved on 26.12
const aboutMainPic = 'images/about.jpg';
const { aboutMainMsg } = require('../texts/aboutTexts');

const sendAbout = (bot, chatId) => {
  bot.sendPhoto(chatId, aboutMainPic, { 
    caption: aboutMainMsg,
  })
};

module.exports = sendAbout;
