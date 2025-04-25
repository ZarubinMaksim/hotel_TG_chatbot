const cron = require('node-cron');
const bot = require('../..');
const { errorTexts } = require('../texts/commonTexts');
const { spaDescriptions } = require('../texts/spaTexts');
const { specialOffersDescription } = require('../texts/specialOffersText');

const scheduledOffers = { };

const updatePromotionsList = () => {
  Object.values(spaDescriptions.spaOffers.offers).filter(offer => offer.isActive && offer.sendTime).map(offer => {
    scheduledOffers[offer.sendTime] = scheduledOffers[offer.sendTime] || [];
    scheduledOffers[offer.sendTime].push(...offer.images);
});

  Object.values(specialOffersDescription).filter(offer => offer.isActive && offer.sendTime).map(offer => {
    scheduledOffers[offer.sendTime] = scheduledOffers[offer.sendTime] || [];
    scheduledOffers[offer.sendTime].push(...offer.images);
  });
};


// Для ежедневного выполнения используйте: 45 12 * * *.
// Для выполнения каждые N дней используйте: 45 12 */N * *.
// Для еженедельного выполнения: 45 12 * * 1.
// Для ежемесячного выполнения: 45 12 1 * *.

const sendPromotion = async (chatId) => {
  try {
    updatePromotionsList();
    
    if (!scheduledOffers || Object.keys(scheduledOffers).length === 0) {
      throw new Error(errorTexts.invalidData);
    }

    Object.entries(scheduledOffers).forEach(([time, images]) => {
      const [hours, minutes] = time.split(':')
      cron.schedule(`${minutes} ${hours} * * *`, () => {
        bot.sendMediaGroup(chatId, images)
      })
    })
  } catch (error) {
    console.error(errorTexts.consoleMsgPromotion, error);
  }  
};

module.exports = sendPromotion;