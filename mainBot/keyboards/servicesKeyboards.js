const { createTwoLinedKeyboard } = require("../components/commomFunctions");
const { menuButtons }= require("../config/appItems");
const { servicesDescription } = require("../texts/servicesText");
const activeServices = Object.values(servicesDescription).filter(service => service.isActive).map(service => service.title);
const activeServicesKeyboard = createTwoLinedKeyboard(activeServices);

const servicesKeyboards = {
  servicesList: [
    [menuButtons.main_menu],
    ...activeServicesKeyboard
  ]
};

module.exports = servicesKeyboards;