//reviewed on 26.12

const bot = require("..");
const handleCounter = require("./counter");

const createOneLinedKeyboard = (data) => {
  const keyboard = [];
  for (let i = 0; i < data.length; i++) {
    keyboard.push([{ text: data[i] }]); // Каждый элемент массива становится отдельной строкой
  }
  return keyboard;
};

const createTwoLinedKeyboard = (data) => {
  const keyboard = []
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

const sendWithLoading = async(chatId, nextFunction, data) => {
  try {
    await bot.sendChatAction(chatId, 'typing');
    await nextFunction(bot, chatId, data)
    await handleCounter(data)
  } catch (error) {
    console.log('Error', error)
  }
}

module.exports = {createTwoLinedKeyboard, createOneLinedKeyboard, sendWithLoading}