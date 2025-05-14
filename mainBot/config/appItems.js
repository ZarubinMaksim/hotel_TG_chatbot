const appItems = {
  main_menu: {
    label: 'В главное меню 🔙',
    regex: /В главное меню 🔙/,
    keyRequest: 'main_menu',
  },
  back: {
    label: 'Назад к выбору 🔙',
    regex: /Назад к выбору|back/,
    keyRequest: 'back',
  },
  sign_in: {
    label: '✍️ Регистрация',
    regex: /Регистрация|sign_in/,
    keyRequest: 'sign_in',
  },
  about_hotel: {
    label: '🏨 Об Отеле',
    regex: /Об Отеле|about/,
    keyRequest: 'about_hotel',
  },
  rooms: {
    label: '🛏 Наши номера',
    regex: /Наши номера|rooms/,
    keyRequest: 'rooms',
  },
  engineer: {
    label: '🛠 Что-то не работает', 
    regex: /🛠 Что-то не работает|engineer/,
    keyRequest: 'engineer',
  },
  housekeeping: {
    label: '🧹 Нужна уборка',
    regex: /🧹 Нужна уборка|cleaning/,
    keyRequest: 'housekeeping',
  },
  restaurants: {
    label: '🍜 Рестораны и меню',
    regex: /Рестораны|restaurants/,
    keyRequest: 'restaurants',
  },
  special_offers: {
    label: '🎉 Спецпредложения',
    regex: /Спецпредложения|special/,
    keyRequest: 'special_offers',
  },
  infrastructure: {
    label: '🏋🏼‍♂️ Инфраструктура',
    regex: /Инфраструктура|infrastructure/,
    keyRequest: 'infrastructure',
  },
  car_rent: {
    label: '🚘 Прокат авто и мото',
    regex: /Прокат авто и мото|car_rent/,
    keyRequest: 'car_rent',
  },
  weeklyGroup: {
    label: '🧘‍♀️ Ежедневные программы',
    regex: /Ежедневные программы|weeklyGroup/,
    keyRequest: 'weeklyGroup',
  },
  spa: {
    label: '💆🏼‍♀️ Спа',
    regex: /Спа|spa/,
    keyRequest: 'spa',
  },
  spa_menu: {
    label: 'Меню',
    regex: /Спа меню|spa_menu/,
    keyRequest: 'spa_menu',
  },
  location: {
    label: '📍 Геолокация',
    regex: /Геолокация|location/,
    keyRequest: 'location',
  },
  leave_review: {
    label: '🙏 Оставить отзыв',
    regex: /Оставить отзыв|review/,
    keyRequest: 'leave_review',
  },
  surroundings: {
    label: '🚶🏼‍♂️ Что рядом',
    regex: /(Что рядом|surroundings|Назад к выбору\s*🔙)$/i,
    keyRequest: 'surroundings',
  },
  hide_menu: {
    label: '❌ Закрыть меню',
    regex: /Закрыть меню|hidemenu/,
    keyRequest: 'hide_menu',
  },
  services: {
    label: '📋 Услуги',
    regex: /Услуги|services/,
    keyRequest: 'services',
  },
  transportation: {
    label: '🚕 Трансфер',
    regex: /🚕 Трансфер|transportation/,
    keyRequest: 'transportation',
  },
  wake_up_call: {
    label: '⏰ Побудка',
    regex: /⏰ Побудка|wake_up_call/,
    keyRequest: 'wake_up_call',
  },
  breakfastBox: {
    label: '🥡 Завтрак с собой',
    regex: /🥡 Завтрак с собой|breakfastBox/,
    keyRequest: 'breakfastBox',
  },
  luggageDown: {
    label: '🧳 Помочь с багажем',
    regex: /🧳 Помочь с багажем|luggageDown/,
    keyRequest: 'luggageDown',
  },
  unidentified: {
    label: '',
    regex: /unidentified/,
    keyRequest: 'unidentified',
  },
  roomService: {
    label: '🍽️ Заказать в номер',
    regex: /🍽️ Заказать в номер|roomService/,
    keyRequest: 'roomService',
  },
};

const menuButtons = {};
for (const [key, { label }] of Object.entries(appItems)) {
  if (label) {
    menuButtons[key] = label;
  }
};

const keyRequests = {};
for (const [key, { keyRequest }] of Object.entries(appItems)) {
  if (keyRequest) {
    keyRequests[key] = keyRequest;
  }
}

const regexMenuButtons = {};
for (const [key, { regex }] of Object.entries(appItems)) {
  if (regex) {
    regexMenuButtons[key] = regex;
  }
}

module.exports = { appItems, menuButtons, keyRequests, regexMenuButtons };
