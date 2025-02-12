const cron = require('node-cron')
const bot = require('..')
const { spaDescriptions } = require('../texts/spaTexts')

const scheduledOffers = {}

const updatePromotionsList = () => {
  Object.values(spaDescriptions.spaOffers.offers).filter(offer => offer.isActive && offer.sendTime).map(offer => {
    scheduledOffers[offer.sendTime] = scheduledOffers[offer.sendTime] || []
    scheduledOffers[offer.sendTime].push(...offer.images)
})
}


// Для ежедневного выполнения используйте: 45 12 * * *.
// Для выполнения каждые N дней используйте: 45 12 */N * *.
// Для еженедельного выполнения: 45 12 * * 1.
// Для ежемесячного выполнения: 45 12 1 * *.

const sendPromotion = (chatId) => {
  updatePromotionsList()
  Object.entries(scheduledOffers).forEach(([time, images]) => {
    const [hours, minutes] = time.split(':')
    cron.schedule(`${minutes} ${hours} * * *`, () => {
      bot.sendMediaGroup(chatId, images)
    })
  })
}

module.exports = sendPromotion