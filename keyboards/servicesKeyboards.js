const servicesDescription = require("../texts/servicesText")

const servicesKeyboards = {
  servicesList: [
    ['В главное меню 🔙'],
    ...Object.values(servicesDescription).map(service => [service.title])
  ]
}

module.exports = servicesKeyboards