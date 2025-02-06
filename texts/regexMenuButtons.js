const regexMenuButtons = {
  main_menu: /В главное меню 🔙/,
  sign_in: /Register/,
  about_hotel: /Об Отеле/,
  rooms: /Наши номера|rooms/,
  engeneers: /🛠 Что-то не работает|engineer/,
  housekeeping: /🧹 Нужна уборка|cleaning/,
  restaurants: /Рестораны|restaurants/,
  special_offers: /Спецпредложения|special/,
  infrastructure: /Инфраструктура|infrastructure/,
  spa: /Спа|spa/,
  location: /Геолокация|location/,
  services: /Услуги|services/,
  review: /Оставить отзыв|review/,
  surroundings: /(Что рядом|surroundings|Назад к выбору\s*🔙)$/i,
}

module.exports = regexMenuButtons