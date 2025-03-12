//rewieved on 26.12
const aboutMainPic = 'images/about.jpg';
const { aboutMainMsg } = require('../texts/aboutTexts');

const sendAbout = (mainBot, chatId) => {
  mainBot.sendPhoto(chatId, aboutMainPic, { 
    caption: aboutMainMsg,
  })
};

module.exports = sendAbout;
