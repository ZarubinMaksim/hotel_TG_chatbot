const restaurantsNameList = `
🥐 Ресторан и пекарня JaakDin | Полезные органические продукты и свежая выпечка.

🍜 Ресторан Sanook | Южнотайская Кухня.

🍹 Overgrown | Лаунж и Коктейльный Бар

🏖 Manaw Manaw | Пул Бар
`

const restaurantsDescriptions = {
  jaakdin: {
    title: '🥐 JaakDin',
    images: [
      { type: 'photo', media: 'images/restaurants/jaakdin/jaakdin.jpeg' },
      { type: 'photo', media: 'images/restaurants/jaakdin/jaakdin2.jpeg' },
      { type: 'photo', media: 'images/restaurants/jaakdin/jaakdin3.jpeg' },
      { type: 'photo', media: 'images/restaurants/jaakdin/jaakdin4.jpeg' },
      { type: 'photo', media: 'images/restaurants/jaakdin/jaakdin5.jpeg' },
    ],
    callback: 'jaakdin',
    description: `
    Ресторан и пекарня JaakDin | Полезные органические продукты и свежая выпечка

На тайском языке "JaakDin" означает "из земли". Наша концепция ресторана и пекарни в стиле медленной еды нацелена на использование только местных ингредиентов и домашних продуктов для создания насыщенных блюд.

JaakDin — это заведение, где можно поесть в любое время дня. Мы предлагаем свежевыпеченный хлеб, круассаны и разнообразные пирожные, дополненные ароматным кофе, обжаренным на месте, и ассортиментом местных чаев.

Часы работы:

Завтрак à la carte: 7:00 – 11:30
Обед и Ужин: 12:00 – 23:00
Последний заказ: 22:30
  `
  },
  sanook: {
    title: '🍜 Sanook',
    images: [
      { type: 'photo', media: 'images/restaurants/sanook/sanook.jpeg' },
      { type: 'photo', media: 'images/restaurants/sanook/sanook2.jpeg' },
      { type: 'photo', media: 'images/restaurants/sanook/sanook3.jpeg' },
      { type: 'photo', media: 'images/restaurants/sanook/sanook4.jpeg' },
      { type: 'photo', media: 'images/restaurants/sanook/sanook5.jpeg' },
    ],
    callback: 'sanook',
    description: `
    Ресторан Sanook | Южнотайская Кухня

Это основной ресторан для завтраков, где вы сможете погрузиться в яркие и острые вкусы южнотайской кухни. Наслаждайтесь разнообразием уличных деликатесов, пробуйте травяные напитки и балуйте себя коктейлями, приготовленными из местных ингредиентов.

Часы работы:

Завтрак "Шведский стол": 6:30 – 10:30
Обед и Ужин: 11:00 – 23:00
Последний заказ: 22:30
    `
  },
  overgrown: {
    title: '🍹 OverGrown',
    images: [
      { type: 'photo', media: 'images/restaurants/overgrown/overgrown.jpeg' },
      { type: 'photo', media: 'images/restaurants/overgrown/overgrown2.jpeg' },
      { type: 'photo', media: 'images/restaurants/overgrown/overgrown3.jpeg' },
      { type: 'photo', media: 'images/restaurants/overgrown/overgrown4.jpeg' },
      { type: 'photo', media: 'images/restaurants/overgrown/overgrown5.jpeg' },
    ],
    callback: 'overgrown',
    description: `
    Overgrown | Лаунж и Коктейльный Бар

Расслабьтесь в нашем уютном лаунже с гармонией комфорта и джазовой музыки, где природа занимает центральное место. Наш интерьер — это не просто вдохновение дикой природы, а радостная дань её непреходящей силе и завораживающему спокойствию.

Искусство смешивания: мастерская миксология от Кхуна Таса. Он не просто сочетает ингредиенты — он создает воспоминания, обеспечивая каждому гостю незабываемые моменты с его творениями.

Часы работы:

15:00 – 00:00
Последний заказ: 23:45
    `
  },
  manaw: {
    title: '🏖 Manaw Manaw',
    images: [
      { type: 'photo', media: 'images/restaurants/manaw/manaw.jpeg' },
      { type: 'photo', media: 'images/restaurants/manaw/manaw2.jpeg' },
      { type: 'photo', media: 'images/restaurants/manaw/manaw3.jpeg' },
      { type: 'photo', media: 'images/restaurants/manaw/manaw4.jpeg' },
    ],
    callback: 'manaw',
    description: `
    Manaw Manaw | Пул Бар

С яркими цветами и веселой атмосферой, Manaw Manaw предлагает идеальное место для расслабляющих дней на солнце.

Подплывите к бару и закажите свежевыжатый сок или экзотический тропический коктейль, или проведите день на удобном шезлонге, наслаждаясь любимыми напитками и книгой.

Созданный как для любителей веселья, так и для тех, кто хочет расслабиться, наш бар у бассейна — это ваш идеальный семейный уголок, чтобы легко переключиться в режим отпуска.

Часы работы:

9:00 – 19:00
Последний заказ: 18:30
    `
  }
}

module.exports = {
  restaurantsNameList,
  restaurantsDescriptions,
}