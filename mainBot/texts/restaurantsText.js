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
    isActive: true,
    description: `
    <b>JaakDin | Натуральные вкусы, свежая выпечка, тёплая атмосфера</b>

Название JaakDin в переводе с тайского означает «из земли», и это отражает нашу философию — использовать только лучшие местные продукты, выращенные с заботой и уважением к природе. Мы создаем блюда в стиле slow food, соединяя свежесть, качество и подлинный вкус.

В любое время дня JaakDin приглашает вас на ароматный кофе, свежеиспечённый хлеб, хрустящие круассаны и изысканные десерты. Утром — насыщенный завтрак, днём и вечером — изысканные блюда, приготовленные с любовью.

📅 Часы работы:
🍽 Завтрак à la carte: 7:00 – 11:30
🥗 Обед и ужин: 12:00 – 23:00
⏳ Последний заказ: 22:30

Откройте для себя вкус природы в каждом блюде! 🌿🥐☕
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
    isActive: true,
    description: `
    <b>Sanook | Аутентичные вкусы Южного Таиланда</b>

Добро пожаловать в Sanook – ресторан, где начинается ваш день! Здесь вы сможете насладиться традиционной южнотайской кухней, богатой пряными ароматами и насыщенными вкусами.

С самого утра мы предлагаем разнообразный завтрак в формате "шведского стола", а в течение дня – блюда, вдохновлённые лучшими кулинарными традициями региона. Попробуйте уличные деликатесы, освежитесь травяными напитками и насладитесь уникальными коктейлями, приготовленными из местных ингредиентов.

📅 Часы работы:
🥐 Завтрак "Шведский стол" – 6:30 – 10:30
🍛 Обед и ужин – 11:30 – 23:00
⏳ Последний заказ – 22:30

Погрузитесь в аутентичную атмосферу Таиланда с каждым блюдом! 🌶️🥭🍹
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
    isActive: true,
    description: `
    <b>Overgrown | Лаунж и Коктейльный Бар</b>

Погрузитесь в атмосферу безмятежности и утончённого вкуса в Overgrown — месте, где природа, комфорт и джазовая музыка сливаются в идеальной гармонии. Здесь каждый элемент интерьера вдохновлён диким великолепием природы, создавая пространство для отдыха, наполненное уютом и стилем.

🍸 Искусство смешивания от мастера миксологии Кхуна Таса — это больше, чем коктейли. Это уникальные истории во вкусе, которые оставляют незабываемые впечатления. Позвольте себе расслабиться и насладиться его авторскими творениями, созданными с вдохновением и мастерством.

📅 Часы работы:
🌿 Лаунж и бар: 15:00 – 00:00
⏳ Последний заказ: 23:45

Окунитесь в мир вкусов и атмосферы, где каждый момент наполнен магией! 🍃🎷🥂
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
    isActive: true,
    description: `
    <b>Manaw Manaw | Бар у Бассейна</b>

Яркие краски, тёплое солнце и беззаботная атмосфера — Manaw Manaw создан для идеального отдыха у воды.

🏝 Окунитесь в расслабление: подплывите к бару за освежающим свежевыжатым соком или попробуйте тропический коктейль с экзотическими нотками. А если хочется просто насладиться моментом, устройтесь поудобнее на шезлонге с любимым напитком и книгой.

💦 Веселье или отдых? Здесь есть место и для активных, и для тех, кто хочет забыть обо всём, наслаждаясь лёгкостью отпуска. Manaw Manaw — идеальное место для семейного уюта и солнечных эмоций!

📅 Часы работы:
🌞 Бар у бассейна: 9:00 – 19:00
⏳ Последний заказ: 18:30

Просто расслабьтесь и наслаждайтесь летом в каждом глотке! 🍹☀️🌴`
  }
}

module.exports = {
  restaurantsNameList,
  restaurantsDescriptions,
}