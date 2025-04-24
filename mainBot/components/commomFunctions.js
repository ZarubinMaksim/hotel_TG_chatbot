//reviewed on 26.12
//rewieved on 24.04

const { startTexts, errorTexts } = require("../texts/commonTexts");
const handleCounter = require("./counter");
const { userStates } = require("./currentUsers");

const createOneLinedKeyboard = (data) => {
  const keyboard = [];
  for (let i = 0; i < data.length; i++) {
    keyboard.push([{ text: data[i] }]); // Каждый элемент массива становится отдельной строкой
  }
  return keyboard;
};

const createTwoLinedKeyboard = (data) => {
  const keyboard = [];
  for (let i = 0; i < data.length; i += 2) {
    const row = [];
    row.push({ text: data[i] });
    if (i + 1 < data.length) {
      row.push({ text: data[i + 1] });
    }
    keyboard.push(row);
  }
  return keyboard;
}

const sendWithLoading = async (mainBot, chatId, nextFunction, data) => {
  try {
    await mainBot.sendChatAction(chatId, 'typing');
    await nextFunction(mainBot, chatId, data)
    await handleCounter(data)
  } catch (error) {
    console.error(errorTexts.consoleMsgSendWithLoading, error)
    await mainBot.sendMessage(chatId, errorTexts.userTryAgainMsg)
  }
}

const checkUserAndSendWithLoading = async (mainBot, chatId, nextFunction, data) => {
  try {
    await mainBot.sendChatAction(chatId, 'typing');
    if (userStates[chatId] && userStates[chatId].room !== '') {
      await nextFunction(mainBot, chatId, data);
    } else{
      await mainBot.sendMessage(chatId, errorTexts.userNotRegisteredForThisOption);
    }
    await handleCounter(data);
  } catch (error) {
    console.error(errorTexts.consoleMsgSendWithLoading, error)
    await mainBot.sendMessage(chatId, errorTexts.userTryAgainMsg)
  }
};

const hideMainMenu = async (mainBot, chatID) => {
  await mainBot.sendMessage(chatID, startTexts.hide_menu, {
    reply_markup: {
      remove_keyboard: true,
    },
  });
};

module.exports = {
  createTwoLinedKeyboard, 
  createOneLinedKeyboard, 
  sendWithLoading, 
  hideMainMenu, 
  checkUserAndSendWithLoading,
};