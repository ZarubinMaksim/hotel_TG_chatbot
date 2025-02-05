const roomsDescriptions = {
  deluxe: {
    title: 'Deluxe, 28 м²',
    callback: 'deluxe',
    keyRequest: 'Deluxe',
    book_url: 'https://lagreenhotel.com/rooms#deluxe',
    images: [
      { 
        type: 'photo', 
        media: 'images/rooms/deluxe/Deluxe1.jpeg', 
        caption: `<b>Deluxe</b> - Просторные апартаменты для двоих гостей с одной двуспальной или двумя раздельными кроватями. 
      Панорамные окна, собственный балкон и роскошная ванна-джакузи обеспечат вам безупречный отдых и полноценное расслабление.
       
🛏 1 двуспальная или 2 односпальные кровати,
📺 Smart TV,
🏞 Балкон,
📱 Технология Smart home,
🛀 Ванна-джакузи,
🧊 Холодильник,
📶 Бесплатный Wi-Fi,
👕 Гардероб,
💇‍♀️ Фен,
🔒 Сейф,
❄️ Кондиционер,
☕️ Чай и кофе в номере,
🥼 Тапочки и халаты,
🔦 Фонарик,
🧴 Ванные принадлежности,
🌂 Зонтик,
🧺 Утюг
      `},
      { type: 'photo', media: 'images/rooms/deluxe/Deluxe2.jpeg' },
      { type: 'photo', media: 'images/rooms/deluxe/Deluxe3.jpeg' },
      { type: 'photo', media: 'images/rooms/deluxe/Deluxe4.jpeg' },
      { type: 'photo', media: 'images/rooms/deluxe/Deluxe5.jpeg' },
      { type: 'photo', media: 'images/rooms/deluxe/Deluxe6.jpeg' },
      { type: 'photo', media: 'images/rooms/deluxe/Deluxe7.jpeg' },
      { type: 'photo', media: 'images/rooms/deluxe/Deluxe8.jpeg' },
      { type: 'photo', media: 'images/rooms/deluxe/Deluxe9.jpeg' }
    ] 
    
  },
  lg_js: { 
    title: 'Junior Suite 45 м²', 
    callback: 'lg_js',
    keyRequest: 'Junior Suite',
    book_url: 'https://lagreenhotel.com/rooms#juniorsuite',
    images: [
      { 
        type: 'photo', 
        media: 'images/rooms/lg_js/lg_js1.jpeg',
        caption: `Просторные однокомнатные апартаменты с полноразмерной кухней и балконом. 
        В гостиной есть удобный раскладывающийся диван, в спальне предусмотрена вместительная система хранения вещей, а ванна оборудована душевой кабиной.
         
        🛏 1 двуспальная или 2 односпальные кровати,
        📺 Smart TV,
        🏞 Балкон,
        📱 Технология Smart home,
        🍽️ Оборудованная кухня,
        🧊 Холодильник,
        📶 Бесплатный Wi-Fi,
        💇‍♀️ Фен,
        🥼 Тапочки и халаты,
        🔒 Сейф,
        ❄️ Кондиционер,
        ☕️ Чай и кофе в номере,
        🌂 Зонтик,
        👕 Гардероб,
        🧴 Ванные принадлежности,
        🔦 Фонарик,
        🧺 Утюг
        ` },
      { type: 'photo', media: 'images/rooms/lg_js/lg_js2.jpeg' },
      { type: 'photo', media: 'images/rooms/lg_js/lg_js3.jpeg' },
      { type: 'photo', media: 'images/rooms/lg_js/lg_js4.jpeg' },
      { type: 'photo', media: 'images/rooms/lg_js/lg_js5.jpeg' },
      { type: 'photo', media: 'images/rooms/lg_js/lg_js6.jpeg' },
      { type: 'photo', media: 'images/rooms/lg_js/lg_js7.jpeg' },
      { type: 'photo', media: 'images/rooms/lg_js/lg_js8.jpeg' }
    ]
  },
  studio: { 
    title: 'Studio 30 м²',
    callback: 'studio',
    keyRequest: 'Studio',
    book_url: 'https://lagreenhotel.com/rooms#studio',
    images: [
      { 
        type: 'photo', 
        media: 'images/rooms/studio/studio1.jpeg',
        caption: `Studio - Комфортная студия с продуманной планировкой, большим количеством мест для хранения и оборудованной 
        кухней для двух гостей. Панорамные окна наполняют номер естественным светом, а теплыми вечерами можно отдыхать на балконе.
        
        🛏 1 двуспальная или 2 односпальные кровати,
        📺 Smart TV,
        🍽️ Оборудованная кухня,
        📱 Технология Smart home,
        🏞 Балкон,
        🧊 Холодильник,
        📶 Бесплатный Wi-Fi,
        🔒 Сейф,
        🥼 Тапочки и халаты,
        💇‍♀️ Фен,
        ❄️ Кондиционер,
        👕 Гардероб,
        🧺 Утюг,
        ☕️ Чай и кофе в номере,
        🧴 Ванные принадлежности,
        🌂 Зонтик,
        🔦 Фонарик
        `
      },
      { type: 'photo', media: 'images/rooms/studio/studio2.jpeg' },
      { type: 'photo', media: 'images/rooms/studio/studio3.jpeg' },
      { type: 'photo', media: 'images/rooms/studio/studio4.jpeg' },
      { type: 'photo', media: 'images/rooms/studio/studio5.jpeg' },
      { type: 'photo', media: 'images/rooms/studio/studio6.jpeg' },
      { type: 'photo', media: 'images/rooms/studio/studio7.jpeg' },
      { type: 'photo', media: 'images/rooms/studio/studio8.jpeg' },
      { type: 'photo', media: 'images/rooms/studio/studio9.jpeg' },
      { type: 'photo', media: 'images/rooms/studio/studio10.jpeg' },
    ]
  },
  studio_dzh: { 
    title: 'Studio с джакузи, 30 м²',
    callback: 'studio_dzh',
    keyRequest: 'Studio with Jacuzzi',
    book_url: 'https://lagreenhotel.com/rooms#studio_jacuzzi',
    images: [
      { 
        type: 'photo', 
        media: 'images/rooms/studio_dzh/studio_dzh1.jpeg',
        caption: `Studio - Эксклюзивная студия с отдельной спальней, полностью оборудованной кухней-гостиной и ванной комнатой.
        На собственной просторной террасе с зоной джакузи вы сможете расслабиться и насладиться отдыхом под открытым небом.
        
        🛏 1 двуспальная или 2 односпальные кровати,
        📺 Smart TV,
        🏞 Терраса,
        📱 Технология Smart home,
        🛀 Джакузи на террасе,
        🧊 Холодильник,
        📶 Бесплатный Wi-Fi,
        🍽️ Оборудованная кухня,
        🥼 Тапочки и халаты,
        🔒 Сейф,
        ❄️ Кондиционер,
        🔦 Фонарик,
        💇‍♀️ Фен,
        ☕️ Чай и кофе в номере,
        🧺 Утюг,
        🧴 Ванные принадлежности,
        🌂 Зонтик,
        👕 Гардероб
        `
      },
      { type: 'photo', media: 'images/rooms/studio_dzh/studio_dzh2.jpeg' },
      { type: 'photo', media: 'images/rooms/studio_dzh/studio_dzh3.jpeg' },
      { type: 'photo', media: 'images/rooms/studio_dzh/studio_dzh4.jpeg' },
      { type: 'photo', media: 'images/rooms/studio_dzh/studio_dzh5.jpeg' },
      { type: 'photo', media: 'images/rooms/studio_dzh/studio_dzh6.jpeg' },
      { type: 'photo', media: 'images/rooms/studio_dzh/studio_dzh7.jpeg' },
      { type: 'photo', media: 'images/rooms/studio_dzh/studio_dzh8.jpeg' },
      { type: 'photo', media: 'images/rooms/studio_dzh/studio_dzh9.jpeg' },
      { type: 'photo', media: 'images/rooms/studio_dzh/studio_dzh10.jpeg' },
    ]
  },
  lg_js_dzh: { 
    title: 'Junior Suite с джакузи, 45 м²',
    callback: 'lg_js_dzh',
    keyRequest: 'Junior Suite with Jacuzzi',
    book_url: 'https://lagreenhotel.com/rooms#juniorsuite_jacuzzi',
    images: [
      { 
        type: 'photo', 
        media: 'images/rooms/lg_js_dzh/lg_js_dzh1.jpeg',
        caption: `La Green Junior Suite - Просторные апартаменты с одной спальней и гостиной, где можно отдохнуть на удобном раскладывающемся диване и насладиться обеденной зоной. Для вашего комфорта в номере есть балкон и собственная терраса с джакузи, где можно расслабиться в течение дня.
        
        🛏 1 двуспальная или 2 односпальные кровати
        📺 Smart TV
        🏞 Терраса
        📱 Технология Smart home
        🛀 Джакузи на террасе
        🧊 Холодильник
        📶 Бесплатный Wi-Fi
        🍽️ Оборудованная кухня
        🔒 Сейф
        🥼 Тапочки и халаты
        ❄️ Кондиционер
        💇‍♀️ Фен
        🌂 Зонтик
        ☕️ Чай и кофе в номере
        👕 Гардероб
        🧴 Ванные принадлежности
        🔦 Фонарик
        🧺 Утюг
        `
      },
      { type: 'photo', media: 'images/rooms/lg_js_dzh/lg_js_dzh2.jpeg' },
      { type: 'photo', media: 'images/rooms/lg_js_dzh/lg_js_dzh3.jpeg' },
      { type: 'photo', media: 'images/rooms/lg_js_dzh/lg_js_dzh4.jpeg' },
      { type: 'photo', media: 'images/rooms/lg_js_dzh/lg_js_dzh5.jpeg' },
      { type: 'photo', media: 'images/rooms/lg_js_dzh/lg_js_dzh6.jpeg' },
      { type: 'photo', media: 'images/rooms/lg_js_dzh/lg_js_dzh7.jpeg' },
      { type: 'photo', media: 'images/rooms/lg_js_dzh/lg_js_dzh8.jpeg' },
      { type: 'photo', media: 'images/rooms/lg_js_dzh/lg_js_dzh9.jpeg' },
    ]
  },
  lg_js_pl: { 
    title: 'Junior Suite с доступом к бассейну, 45 м².',
    callback: 'lg_js_pl',
    keyRequest: 'Junior Suite Pool Access',
    book_url: 'https://lagreenhotel.com/rooms#juniorsuite_poolaccess',
    images: [
      { 
        type: 'photo', 
        media: 'images/rooms/lg_js_pl/lg_js_pl1.jpeg',
        caption: `La Green Junior Suite - Специальный номер на первом этаже с прямым доступом к главному бассейну комплекса через собственную террасу. В апартаментах есть одна спальня, гостиная с оборудованной кухней и ванная комната, чтобы обеспечить вам максимальный комфорт.
  
        🛏 1 двуспальная или 2 односпальные кровати
        📺 Smart TV
        🍽️ Оборудованная кухня
        📱 Технология Smart home
        🏊‍♀️ Бассейн
        🧊 Холодильник
        📶 Бесплатный Wi-Fi
        🔒 Сейф
        🥼 Тапочки и халаты
        💇‍♀️ Фен
        ❄️ Кондиционер
        ☕️ Чай и кофе в номере
        👕 Гардероб
        🔦 Фонарик
        🧴 Ванные принадлежности
        🌂 Зонтик
        🧺 Утюг
        `
      },
      { type: 'photo', media: 'images/rooms/lg_js_pl/lg_js_pl2.jpeg' },
      { type: 'photo', media: 'images/rooms/lg_js_pl/lg_js_pl3.jpeg' },
      { type: 'photo', media: 'images/rooms/lg_js_pl/lg_js_pl4.jpeg' },
      { type: 'photo', media: 'images/rooms/lg_js_pl/lg_js_pl5.jpeg' },
      { type: 'photo', media: 'images/rooms/lg_js_pl/lg_js_pl6.jpeg' },
      { type: 'photo', media: 'images/rooms/lg_js_pl/lg_js_pl7.jpeg' },
      { type: 'photo', media: 'images/rooms/lg_js_pl/lg_js_pl8.jpeg' },
      { type: 'photo', media: 'images/rooms/lg_js_pl/lg_js_pl9.jpeg' },
      { type: 'photo', media: 'images/rooms/lg_js_pl/lg_js_pl10.jpeg' },
    ]
  },
  lg_js_2br: { 
    title: 'Junior Suite с 2 спальнями, 90 м².',
    callback: 'lg_js_2br',
    keyRequest: 'Junior Suite 2 bedroom',
    book_url: 'https://lagreenhotel.com/rooms#2bdr',
    images: [
      { 
        type: 'photo', 
        media: 'images/rooms/lg_js_2br/lg_js_2br1.jpeg',
        caption: `La Green Junior Suite - Просторный семейный номер с террасой и большой гостиной зоной, объединяющей столовую и кухню в одном жилом пространстве. Номер включает две изолированные спальни, два санузла с ванной и душевой кабиной для вашего удобства.
  
        🛏 1 или 2 двуспальные и 2 односпальные кровати
        🛏 2 спальни
        🏞 2 балкона
        📱 Технология Smart home
        🛋 Гостиная зона
        🚿 2 санузла
        📶 Бесплатный Wi-Fi
        🍽️ Оборудованная кухня
        🧊 Холодильник
        🛋 Диван
        ❄️ Кондиционер
        💇‍♀️ Фен
        📺 Smart TV
        🥼 Тапочки и халаты
        👕 Гардероб
        🔒 Сейф
        🍽 Обеденный стол
        🔦 Фонарик
        ☕️ Чай и кофе в номере
        🌂 Зонтик
        🧺 Утюг
        🧴 Ванные принадлежности
        `
      },
      { type: 'photo', media: 'images/rooms/lg_js_2br/lg_js_2br2.jpeg' },
      { type: 'photo', media: 'images/rooms/lg_js_2br/lg_js_2br3.jpeg' },
      { type: 'photo', media: 'images/rooms/lg_js_2br/lg_js_2br4.jpeg' },
      { type: 'photo', media: 'images/rooms/lg_js_2br/lg_js_2br5.jpeg' },
      { type: 'photo', media: 'images/rooms/lg_js_2br/lg_js_2br6.jpeg' },
      { type: 'photo', media: 'images/rooms/lg_js_2br/lg_js_2br7.jpeg' },
      { type: 'photo', media: 'images/rooms/lg_js_2br/lg_js_2br8.jpeg' },
      { type: 'photo', media: 'images/rooms/lg_js_2br/lg_js_2br9.jpeg' },
      { type: 'photo', media: 'images/rooms/lg_js_2br/lg_js_2br10.jpeg' },
    ]
  },
  lg_js_2br_dzh: { 
    title: 'Junior Suite с 2 спальнями с джакузи, 90 м².',
    callback: 'lg_js_2br_dzh',
    keyRequest: 'Junior Suite 2 bedroom with jacuzzi',
    book_url: 'https://lagreenhotel.com/rooms#2bdr_jacuzzi',
    images: [
      { 
        type: 'photo', 
        media: 'images/rooms/lg_js_2br_dzh/lg_js_2br_dzh1.jpeg',
        caption: `La Green Junior Suite - Просторный люкс с двумя спальнями и собственной террасой с зоной джакузи. Удобная гостиная с кухней и обеденной зоной, две ванные комнаты и изолированные спальни сделают отдых комфортным для всей семьи.
  
        🛏 1 или 2 двуспальные и 2 односпальные кровати
        🛀 Джакузи на террасе
        🏞 2 террасы
        📱 Технология Smart home
        🚿 2 санузла
        🛋 Гостиная зона
        📶 Бесплатный Wi-Fi
        📺 Smart TV
        🧊 Холодильник
        🛏 2 спальни
        🍽️ Оборудованная кухня
        🥼 Тапочки и халаты
        🔒 Сейф
        💇‍♀️ Фен
        👕 Гардероб
        🛋 Диван
        ❄️ Кондиционер
        🔦 Фонарик
        ☕️ Чай и кофе в номере
        🍽 Обеденный стол
        🧺 Утюг
        🧴 Ванные принадлежности
        `
      },
      { type: 'photo', media: 'images/rooms/lg_js_2br_dzh/lg_js_2br_dzh2.jpeg' },
      { type: 'photo', media: 'images/rooms/lg_js_2br_dzh/lg_js_2br_dzh3.jpeg' },
      { type: 'photo', media: 'images/rooms/lg_js_2br_dzh/lg_js_2br_dzh4.jpeg' },
      { type: 'photo', media: 'images/rooms/lg_js_2br_dzh/lg_js_2br_dzh5.jpeg' },
      { type: 'photo', media: 'images/rooms/lg_js_2br_dzh/lg_js_2br_dzh6.jpeg' },
      { type: 'photo', media: 'images/rooms/lg_js_2br_dzh/lg_js_2br_dzh7.jpeg' },
      { type: 'photo', media: 'images/rooms/lg_js_2br_dzh/lg_js_2br_dzh8.jpeg' },
      { type: 'photo', media: 'images/rooms/lg_js_2br_dzh/lg_js_2br_dzh9.jpeg' },
      { type: 'photo', media: 'images/rooms/lg_js_2br_dzh/lg_js_2br_dzh10.jpeg' },
    ]
  },
  lg_js_2br_pl: { 
    title: 'Junior Suite с 2 спальнями с доступом к бассейну, 90 м².',
    callback: 'lg_js_2br_pl',
    keyRequest: 'Junior Suite 2 bedroom Pool Access',
    book_url: 'https://lagreenhotel.com/rooms#2bdr_poolaccess',
    images: [
      { 
        type: 'photo', 
        media: 'images/rooms/lg_js_2br_pl/lg_js_2br_pl1.jpeg',
        caption: `La Green Junior Suite - Семейный номер с двумя изолированными спальнями и гостиной, совмещенной с полноразмерной кухней-столовой. Номер расположен на первом этаже и предоставляет эксклюзивный доступ к главному бассейну через собственную террасу.
  
        🛏 1 или 2 двуспальные и 2 односпальные кровати
        🚿 2 санузла
        🛏 2 спальни
        📱 Технология Smart home
        🏊‍♀️ Бассейн
        🛋 Гостиная зона
        📶 Бесплатный Wi-Fi
        🍽️ Оборудованная кухня
        🧊 Холодильник
        🛋 Диван
        📺 Smart TV
        ☕️ Чай и кофе в номере
        🔒 Сейф
        ❄️ Кондиционер
        💇‍♀️ Фен
        🥼 Тапочки и халаты
        🍽 Обеденный стол
        👕 Гардероб
        🌂 Зонтик
        🧺 Утюг
        🔦 Фонарик
        🧴 Ванные принадлежности
        `
      },
      { type: 'photo', media: 'images/rooms/lg_js_2br_pl/lg_js_2br_pl2.jpeg' },
      { type: 'photo', media: 'images/rooms/lg_js_2br_pl/lg_js_2br_pl3.jpeg' },
      { type: 'photo', media: 'images/rooms/lg_js_2br_pl/lg_js_2br_pl4.jpeg' },
      { type: 'photo', media: 'images/rooms/lg_js_2br_pl/lg_js_2br_pl5.jpeg' },    ]
  },
  duplex_2br_pl: { 
    title: 'Duplex Suite с 2 спальнями с доступом к бассейну, 109 м².',
    callback: 'duplex_2br_pl',
    keyRequest: 'Duplex Suite 2 bedroom Pool Access',
    book_url: 'https://lagreenhotel.com/rooms#duplex_2bdr_poolaccess',
    images: [
      { 
        type: 'photo', 
        media: 'images/rooms/duplex_2br_pool/duplex_2br_pool1.jpeg',
        caption: `Duplex Suite - Роскошные двухэтажные апартаменты площадью 109 м². На первом этаже расположены просторная кухня-гостиная, ванная комната и выход к главному бассейну. На втором этаже находятся две спальни и общая ванная комната для вашего комфорта.
  
        🛏 1 или 2 двуспальные и 2 односпальные кровати
        🏊‍♀️ Бассейн
        🧊 Холодильник
        📱 Технология Smart home
        🍽️ Оборудованная кухня
        🛋 Гостиная зона
        🛏 2 спальни
        📶 Бесплатный Wi-Fi
        📺 Smart TV
        🏠 Два этажа
        ❄️ Кондиционер
        🚿 2 санузла
        🔒 Сейф
        🥼 Тапочки и халаты
        💇‍♀️ Фен
        🛋 Диван
        🍽 Обеденный стол
        ☕️ Чай и кофе в номере
        🌂 Зонтик
        🔦 Фонарик
        🧴 Ванные принадлежности
        🧺 Утюг
        👕 Гардероб
        `
      },
      { type: 'photo', media: 'images/rooms/duplex_2br_pool/duplex_2br_pool2.jpeg' },
      { type: 'photo', media: 'images/rooms/duplex_2br_pool/duplex_2br_pool3.jpeg' },
      { type: 'photo', media: 'images/rooms/duplex_2br_pool/duplex_2br_pool4.jpeg' },
      { type: 'photo', media: 'images/rooms/duplex_2br_pool/duplex_2br_pool5.jpeg' },
      { type: 'photo', media: 'images/rooms/duplex_2br_pool/duplex_2br_pool6.jpeg' },
    ]
  },
  lg_suite_3br: {
    title: 'La Green Suite с 3 спальнями, 130 м².',
    callback: 'lg_suite_3br',
    keyRequest: 'La Green Suite 3 bedroom',
    book_url: 'https://lagreenhotel.com/rooms#duplex_3bdr',
    images: [
      { 
        type: 'photo', 
        media: 'images/rooms/lg_suite_3br/lg_suite_3br1.jpeg',
        caption: `La Green Suite - Просторные апартаменты с тремя спальнями, тремя санузлами и большим количеством удобств для комфортного отдыха. Идеально подходит для семейного проживания или групп.
  
        🛏 2 или 3 двуспальные и 2 односпальные кровати
        🚿 3 санузла
        🧊 Холодильник
        📱 Технология Smart home
        🏞 3 балкона
        🧺 Стиральная машина
        📶 Бесплатный Wi-Fi
        🍽️ Оборудованная кухня
        🛋 Гостиная зона
        🛏 3 спальни
        ❄️ Кондиционер
        👕 Гардероб
        🛋 Диван
        📺 Smart TV
        🔒 Сейф
        💇‍♀️ Фен
        🍽 Обеденный стол
        🥼 Тапочки и халаты
        ☕️ Чай и кофе в номере
        🌂 Зонтик
        🔦 Фонарик
        🧴 Ванные принадлежности
        🧺 Утюг
        `
      },
      { type: 'photo', media: 'images/rooms/lg_suite_3br/lg_suite_3br2.jpeg' },
      { type: 'photo', media: 'images/rooms/lg_suite_3br/lg_suite_3br3.jpeg' },
      { type: 'photo', media: 'images/rooms/lg_suite_3br/lg_suite_3br4.jpeg' },
      { type: 'photo', media: 'images/rooms/lg_suite_3br/lg_suite_3br5.jpeg' },
      { type: 'photo', media: 'images/rooms/lg_suite_3br/lg_suite_3br6.jpeg' },
      { type: 'photo', media: 'images/rooms/lg_suite_3br/lg_suite_3br7.jpeg' },
      { type: 'photo', media: 'images/rooms/lg_suite_3br/lg_suite_3br8.jpeg' },
      { type: 'photo', media: 'images/rooms/lg_suite_3br/lg_suite_3br9.jpeg' },
    ]
  },
};

module.exports = {roomsDescriptions}