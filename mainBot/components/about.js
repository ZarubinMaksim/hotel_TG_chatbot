//rewieved on 26.12
//rewieved on 24.04 - try/catch
//rewieved on 25.04 - if added to check data
const aboutMainPic = 'images/about.jpg';

const { aboutMainMsg } = require('../texts/aboutTexts');
const { errorTexts } = require('../texts/commonTexts');

const sendAbout = async (mainBot, chatId) => {
  try {
    if (
      !aboutMainPic ||
      typeof aboutMainPic !== 'string' ||
      !aboutMainMsg ||
      typeof aboutMainMsg !== 'string'
    ) {
      throw new Error(errorTexts.invalidData);
    }
    
    await mainBot.sendPhoto(chatId, aboutMainPic, { 
      caption: aboutMainMsg,
    });
  } catch (error) {
    console.error(errorTexts.consoleMsgAbout, error)
    await mainBot.sendMessage(chatId, errorTexts.userTryAgainMsg)
  }
};

module.exports = sendAbout;