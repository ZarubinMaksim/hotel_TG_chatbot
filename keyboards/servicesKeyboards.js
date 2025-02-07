const { createTwoLinedKeyboard } = require("../components/commomFunctions")
const menuButtons = require("../texts/menuButtons")
const {servicesDescription} = require("../texts/servicesText")
const activeServices = Object.values(servicesDescription).filter(service => service.isActive).map(service => service.title)
const keybord = createTwoLinedKeyboard(activeServices)

const servicesKeyboards = {
  servicesList: [
    [menuButtons.to_main_menu],
    ...keybord
  ]
}

module.exports = servicesKeyboards