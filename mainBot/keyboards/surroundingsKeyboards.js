const { createTwoLinedKeyboard } = require("../components/commomFunctions");
const { menuButtons }= require("../config/appItems");
const { surroundingsDescriptions } = require("../texts/surroundText");

const activeSurroundings = Object.values(surroundingsDescriptions).filter(surrounding => surrounding.isActive).map(surrounding => surrounding.title);
const activeSurroundingsKeyboard = createTwoLinedKeyboard(activeSurroundings);


const surroundingsKeyboards = {
  surroundingsKeyboard: [
    [menuButtons.main_menu],
    ...activeSurroundingsKeyboard
  ],
};

const surroundingsSubKeyboard = (data) => [
  [menuButtons.main_menu, menuButtons.back],
  ...Object.values(data.items).filter(item => item.isActive).map(item => [item.title])
];

module.exports = { surroundingsKeyboards, surroundingsSubKeyboard };