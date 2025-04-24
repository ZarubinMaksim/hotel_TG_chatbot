const reviewsKeyboards = require("../keyboards/reviewsKeyboards");
const { errorTexts } = require("../texts/commonTexts");
const { hotelEmail, newReviewSubject } = require("../texts/emailSettings");
const reviewsTexts = require("../texts/reviewsTexts");
const sendEmail = require("./sendEmail");

const sendPlatformsForReview = async (bot, chatId) => {
  try {
    if (
      !reviewsTexts.main_message ||
      typeof reviewsTexts.main_message !== 'string'
    ) {
      throw new Error(errorTexts.invalidData)
    }

    await bot.sendMessage(chatId, reviewsTexts.main_message, {
      reply_markup: {
        inline_keyboard: [
          ...reviewsKeyboards.reviewsPlatformsList,
        ]
      }
    });
  } catch (error) {
    console.error(errorTexts.consoleMsgOTAReview, error);
    await bot.sendMessage(chatId, errorTexts.userTryAgainMsg);
  }
};

const submitReview = async (bot, managerBot, chatId, msg) => {
  // handle email review first
  try {
    if (
      !hotelEmail ||
      !newReviewSubject ||
      !msg.text ||
      typeof hotelEmail !== 'string' ||
      typeof newReviewSubject !== 'string' ||
      typeof msg.text !== 'string'
    ) {
      throw new Error(errorTexts.invalidData);
    }

    await sendEmail(hotelEmail, newReviewSubject, msg.text);
  } catch (error) {
    console.error(errorTexts.consoleMsgEmailReview, error);
  }
  //handle review to maagerBot second
  try {
    if (
      !msg.text ||
      !reviewsTexts.thanks_for_review ||
      typeof msg.text !== 'string' ||
      typeof reviewsTexts.thanks_for_review !== 'string'
    ) {
      throw new Error(errorTexts.invalidData);
    }

    await managerBot.sendMessage(chatId, msg.text);
    await bot.sendMessage(chatId, reviewsTexts.thanks_for_review);
  } catch (error) {
    console.error(errorTexts.consoleMsgSendReview, error);
    await bot.sendMessage(chatId, errorTexts.userTryAgainMsg);
  }

}

module.exports = { sendPlatformsForReview, submitReview };