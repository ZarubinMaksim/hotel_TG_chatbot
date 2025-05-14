const startTexts = {
  main_message: 'Всё, что вам нужно – в одном меню! 👇🏻 Выберите категорию, и мы подскажем нужную информацию.',
  hide_menu: 'Готовы продолжить? Нажмите /start, чтобы вернуться в меню',
  show_menu: 'Нажмите, чтобы начать!'
};

const errorTexts = {
  consoleMsgAbout: 'Failed to send about message:',
  consoleMsgCarRent: 'Failed to send car rent message:',
  consoleMsgSendWithLoading: 'Failed to send with loading',
  consoleMsgFailedToSyncDB: 'Failed sync users from DB',
  consoleMsgRestaurantsList: 'Failed to send restaurants list',
  consoleMsgRestaurantInfo: 'Failed to send restaurant info',
  consoleMsgLocation: 'Failed to send location',
  consoleMsgInfrastructuresList: 'Failed to send infrastructures list',
  consoleMsgInfrastructureInfo: 'Failed to send infrastructure info',
  consoleMsgEngeneers: 'Failed to send engeners',
  consoleMsgHK: 'Failed to send HK',
  consoleMsgOTAReview: 'Failed to send OTA for review',
  consoleMsgEmailReview: 'Failed to send email with review',
  consoleMsgSendReview: 'Failed to send review to manager bot and reply to the user',
  consoleMsgRoomsList: 'Failed to send rooms list',
  consoleMsgRoomInfo: 'Failed to send room info.',
  consoleMsgSendEmail: 'Failed to send email',
  consoleMsgPromotion: 'Failed to send promotion',
  consoleMsgServices: 'Failed to send services',
  consoleMsgCheckRegistered: 'Failed to check if registered',
  consoleMsgSpaInfo: 'Failed to send spa info',
  consoleMsgSpecialOffers: 'Failed to send special offers',
  consoleMsgMainMenu: 'Failed to send main menu',
  consoleMsgSurroundings: 'Failed to send surroundings',
  consoleMsgWeeklyActivities: 'Failed to send weekly activities',
  consoleMsgFollowingMsg: 'Failed to handle following message',
  consoleMsgRoomService: 'Failed to send room service menu',
  invalidData: 'Invalid data',
  userNotRegisteredForThisOption: 'Кажется, что вы еще не зарегистрированы чтобы пользоваться данной опцией',
  userTryAgainMsg: '❗️Sorry, something went wrong. Please try again later.',
};

module.exports = { startTexts, errorTexts };