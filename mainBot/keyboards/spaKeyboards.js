const { createTwoLinedKeyboard } = require("../components/commomFunctions");
const { menuButtons }= require("../config/appItems");
const { spaDescriptions } = require("../texts/spaTexts");
const activeSpa = Object.values(spaDescriptions).filter(spa => spa.isActive).map(spa => spa.title);
const activeSpaKeyboard = createTwoLinedKeyboard(activeSpa);

const spaKeyboards = {
  spaKeyboard: [
    [menuButtons.main_menu],
    ...activeSpaKeyboard,
  ]
};

const spaSubKeyboard = (data) => [
  [menuButtons.main_menu],
  ...Object.values(data.offers).filter(item => item.isActive).map(item => [item.title])
];

module.exports = { spaKeyboards, spaSubKeyboard };