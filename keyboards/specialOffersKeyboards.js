const { createTwoLinedKeyboard } = require("../components/commomFunctions");
const menuButtons = require("../texts/menuButtons");
const { specialOffersDescription } = require("../texts/specialOffersText");
const activeSpecialOffers = Object.values(specialOffersDescription).filter(specialOffer => specialOffer.isActive).map(specialOffer => specialOffer.title)
const keyboard = createTwoLinedKeyboard(activeSpecialOffers)

const specialOffersKeyboards = {
  specialOffersKeyboard: [
    [menuButtons.to_main_menu],
    ...keyboard
  ]
}

module.exports = specialOffersKeyboards