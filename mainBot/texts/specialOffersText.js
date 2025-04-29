const specialOffersDescription = {
  loykrahtong: {
    title: '🎉 Loykrahtong',
    images: [
      {type: 'photo', media: 'images/specialOffers/loykrahtong.jpeg'}
    ],
    description: `
    This Loy Krathong, let Sanook Restaurant take you on a flavorful journey with our special Thai Set Menu!
🚩 November 15, 2024

Menu Highlights:

Amuse Bouche: Kratong Thong – Thai Savory Tartlets
Starters: Yum Neua Yang – Spicy Grilled Beef Salad
Soup: Tom Yum Goong – Hot and Sour Soup with Prawns
Mains: Pla Pad Preaw Wan – Sweet and Sour Seabass, Gaeng Poo Bai Cha Plu – Crab Curry, Steamed Jasmine Rice
Dessert: Tub Tim Grob – Thai Red Rubies with Water Chestnut, Jackfruit, Coconut Milk, and Tapioca

Join us for an unforgettable culinary experience! 🌕🏮🍽️✨ Only THB 990

Book now! available exclusively at Sanook Restaurant on November 15, 2024.
 `,
    isActive: true,
    callback: 'loykrahtong',
    sendTime: '15:00'
  },
  specialCocktails:
  {
    title: '🍹 Special cocktails',
    images: [
      {type: 'photo', media: 'images/specialOffers/specialCocktails.jpeg'}
    ],
    description: `🍸 Sip in Style with our exclusive Grey Goose Martini Flight! Experience three unique twists, each crafted to elevate your cocktail journey. Perfect for an unforgettable night at Overgrown Lounge & Cocktail Bar.

    Flight of 3 Martinis | THB 790
    
    🧊 Ti Ki Ni – Tropical vibes with a smoky twist
    
    🌺 Thai Tini – A vibrant blend with a local flair
    
    🍓 Great Tini – Decadent and sweet with chocolate notes
    
    📍 Only at Overgrown Lounge, open daily from 15:00 - 24:00`,
    isActive: true,
    callback: 'specialCocktails',
    sendTime: '15:00'
  },
  sevenDaysMenu:
  {
    title: '📆 Еженедельные предложения',
    images: [
      {type: 'photo', media: 'images/specialOffers/sevendays.jpeg'}
    ],
    description: `В ресторане JaakDin

    Понедельник – Привет, Пицца: Купи 1, получи 1 бесплатно (пицца на дровах в неаполитанском стиле).
    Вторник – Пиво Draft Singha: Купи 2, получи 1 бесплатно.
    Среда – Среда, как маленькая пятница: винный буфет за 990 THB с человека.
    Четверг – День пасты #ДеньЛюбителейПасты: безлимитная паста за 499 THB с человека.
    Пятница – Пятничный Aperol Spritz: Купи 1, получи 1 бесплатно.
    Суббота – День стейков: безлимитный стейк из филейной части за 990 THB.
    Воскресенье – День любителей хлеба: все сэндвичи и бургеры – купи 1, получи 1 бесплатно.`,
    isActive: true,
    callback: 'sevenDaysMenu',
    sendTime: '15:00'
  },
  happyHours:
  {
    title: '🤩 Счастливые часы',
    images: [
      {type: 'photo', media: 'images/specialOffers/happyhours.jpeg'}
    ],
    description: `В баре Manaw Manaw у бассейна

    Наслаждайтесь нашими фирменными коктейлями и освежающими напитками по специальным ценам с 12:00 до 13:00 и с 16:00 до 17:00!`,
    isActive: true,
    callback: 'happyHours',
    sendTime: '15:00'
  },
  longTermLiving:
  {
    title: '♾ Длительное проживание',
    images: [
      {type: 'photo', media: 'images/specialOffers/longtermliving.jpeg'}
    ],
    description: `💚 Loving your time at La Green Hotel? 

    Book your next long-term stay of 20 nights or more directly with us and enjoy exclusive rates crafted just for you!
    
    Contact us today to secure your next unforgettable stay.`,
    isActive: true,
    callback: 'longTermLiving'
  },
  stayAndPlay:
  {
    title: '🎾 Живи и играй',
    images: [
      {type: 'photo', media: 'images/specialOffers/liveandplay.jpeg'}
    ],
    description: `Enjoy a complimentary for an hour of tennis, and get 10% off on Food & Beverage credit at SiamSportsPro Tennis Academy Phuket.


    Contact us for more information and reservation`,
    isActive: true,
    callback: 'stayAndPlay'
  },
  specialCakes:
  {
    title: '🎂 Индивидуальные торты',
    images: [
      {type: 'photo', media: 'images/specialOffers/specialCakes.jpeg'}
    ],
    description: `В ресторане JaakDin

    Каждое празднование имеет свою историю, и наши кастомизированные торты – идеальный способ её рассказать.
    
    Создайте свой торт у нас сегодня! Цены от 690 THB за фунт.`,
    isActive: true,
    callback: 'specialCakes'
  },
  aperol:
  {
    title: '🍸 Полуденное удовольствие с Aperol',
    images: [
      {type: 'photo', media: 'images/specialOffers/aperol.jpeg'}
    ],
    description: `С 12:00 до 16:00 ежедневно

    Наслаждайтесь коктейлями Aperol Spritz: 2 бокала всего за 500 THB в нашем Лобби-баре!`,
    isActive: true,
    callback: 'aperol'
  },
};

const specialOffersTexts = {
  main_message: 'Ловите лучшие предложения! 🎉 Вот список актуальных акций:'
};

module.exports = { specialOffersDescription, specialOffersTexts };