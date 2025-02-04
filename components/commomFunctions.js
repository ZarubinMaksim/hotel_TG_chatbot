//reviewed on 26.12

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

module.exports = {createTwoLinedKeyboard, createOneLinedKeyboard}