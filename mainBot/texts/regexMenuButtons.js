//important file - checking if chat input message alligns with this list

const regexMenuButtons = {
  main_menu: /В главное меню 🔙/,
  sign_in: /Регистрация|signIn/,
  about_hotel: /Об Отеле/,
  rooms: /Наши номера|rooms/,
  engeneers: /🛠 Что-то не работает|engineer/,
  housekeeping: /🧹 Нужна уборка|cleaning/,
  restaurants: /Рестораны|restaurants/,
  special_offers: /Спецпредложения|special/,
  infrastructure: /Инфраструктура|infrastructure/,
  weeklyGroup: /Ежедневные программы|weeklyGroup/,
  spa: /Спа|spa/,
  car_rent: /Прокат авто и мото|car_rent/,
  location: /Геолокация|location/,
  services: /Услуги|services/,
  review: /Оставить отзыв|review/,
  surroundings: /(Что рядом|surroundings|Назад к выбору\s*🔙)$/i,
  hide_menu: /Закрыть меню|hidemenu/
}

module.exports = regexMenuButtons