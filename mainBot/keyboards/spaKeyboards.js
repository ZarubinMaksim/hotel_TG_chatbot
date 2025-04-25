const { createTwoLinedKeyboard } = require("../components/commomFunctions");
const menuButtons = require("../texts/menuButtons");
const { spaDescriptions } = require("../texts/spaTexts");
const activeSpa = Object.values(spaDescriptions).filter(spa => spa.isActive).map(spa => spa.title);
const activeSpaKeyboard = createTwoLinedKeyboard(activeSpa);

const spaKeyboards = {
  spaKeyboard: [
    [menuButtons.to_main_menu],
    ...activeSpaKeyboard,
  ]
};

const spaSubKeyboard = (data) => [
  [menuButtons.to_main_menu],
  [menuButtons.back],
  ...Object.values(data.offers).filter(item => item.isActive).map(item => [item.title])
];

module.exports = { spaKeyboards, spaSubKeyboard };