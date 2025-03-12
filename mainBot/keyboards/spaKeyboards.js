const { createTwoLinedKeyboard } = require("../components/commomFunctions");
const menuButtons = require("../texts/menuButtons");
const { spaDescriptions } = require("../texts/spaTexts");
const { specialOffersDescription } = require("../texts/specialOffersText");
const activeSpa = Object.values(spaDescriptions).filter(spa => spa.isActive).map(spa => spa.title)
const keyboard = createTwoLinedKeyboard(activeSpa)

const spaKeyboards = {
  spaKeyboard: [
    [menuButtons.to_main_menu],
    ...keyboard,

  ]
}

module.exports = spaKeyboards