const { createTwoLinedKeyboard } = require("../components/commomFunctions");
const { menuButtons }= require("../config/appItems");
const { specialOffersDescription } = require("../texts/specialOffersText");
const activeSpecialOffers = Object.values(specialOffersDescription).filter(specialOffer => specialOffer.isActive).map(specialOffer => specialOffer.title);
const activeSpecialOffersKeyboard = createTwoLinedKeyboard(activeSpecialOffers);

const specialOffersKeyboards = {
  specialOffersKeyboard: [
    [menuButtons.main_menu],
    ...activeSpecialOffersKeyboard
  ]
};

module.exports = specialOffersKeyboards;