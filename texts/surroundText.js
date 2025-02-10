const surroundingsDescriptions = {
  beach: {
    title: 'Пляжи', 
    items: {
      layan_beach: {
        title: 'Пляж Лаян',
        images: [
          {type: 'photo', media: 'images/surroundings/layan_beach/layan_beach.jpeg'},
          {type: 'photo', media: 'images/surroundings/layan_beach/layan_beach2.jpeg'},
        ],
        callback: 'layan_beach',
        description: `Пляж Лаян (Layan Beach) находится на северо-западе острова Пхукет и является продолжением пляжа Банг Тао. Это один из немногих пляжей западного побережья, который остаётся тихим и не тронутым туристической инфраструктурой. 21

        Особенности пляжа:
        
        Протяжённость около 2 км, имеет извилистую береговую линию. 3
        Пляж подвержен отливам, поэтому, когда вода уходит, можно дойти до ближайшего островка, на котором есть совсем малюсенький пляж. 3
        Вдоль береговой линии много хвойных деревьев казуаринов, поэтому весь песок в их иглах. 3
        В северной части пляжа есть бесплатный туалет и душ с пресной водой. 3
        Рядом с устьем реки находится небольшой пирс, к которому швартуются рыбацкие лодки. 1
        В начале пляжа располагается ресторан с несколькими пляжными креслами. В меню ресторана представлены блюда тайской и европейской кухни. 1`,
        latitude: 12.345,
        longtitude: 14.435,
        isActive: true
      }, 
      banana_beach: {
        title: 'Пляж Банана',
        images: [
          { type: 'photo', media: 'images/surroundings/banana_beach/banana_beach.jpeg'},
          { type: 'photo', media: 'images/surroundings/banana_beach/banana_beach2.jpeg'}
        ],
        callback: 'banana_beach',
        description: `Всего в короткой поездке от Пхукета находится пляж Банана-Бич с белоснежным песком, бирюзовой водой и пышной тропической природой. Погрузитесь в кристально чистые воды с маской и трубкой, чтобы увидеть яркие коралловые рифы и морских обитателей. Для любителей экстрима доступны дополнительные развлечения, такие как каякинг и парасейлинг.`,
        latitude: 12.345,
        longtitude: 14.435,
        isActive: true
      },
      nayton_beach: {
        title: 'Пляж Найтон',
        images: [
          { type: 'photo', media: 'images/surroundings/nayton_beach/nayton_beach.jpeg'},
          { type: 'photo', media: 'images/surroundings/nayton_beach/nayton_beach2.jpeg'}
        ],
        callback: 'nayton_beach',
        description: `Пляж Найтон — уединённый уголок на северо-западе Пхукета, идеально подходящий для спокойного отдыха. Это место с чистым морем, мягким золотистым песком и красивыми пейзажами, даже в сезон остающееся малолюдным.

        🌊 Особенности:
        ✔ Пологий вход в воду, удобный для купания
        ✔ Казуариновая роща, дающая тень в первой половине дня
        ✔ Чистый пляж, регулярная уборка
        
        🤿 Чем заняться?
        • Купание и снорклинг (лучшие места у краёв пляжа)
        • Прогулки по широкой береговой линии
        • Расслабляющий массаж прямо у моря
        
        🏡 Инфраструктура:
        Рядом есть несколько кафе с тайской и европейской кухней, небольшие магазины и рынки с уличной едой. Отелей немного: от роскошного Pullman Phuket Arcadia до бюджетных вариантов.
        
        🚗 Как добраться?
        На такси или арендованном авто (из аэропорта всего 10 км). Общественный транспорт не развит.`,
        latitude: 12.345,
        longtitude: 14.435,
        isActive: true
      },
    }
  }, 
  museums: {
    title: 'Храмы',
    items: {
      wat_phra_thong: {
        title: 'Ват Пратхонг',
        images: [
          { type: 'photo', media: 'images/surroundings/wat_phra_thong_temple/wat_phra_thong_temple.jpeg' },
          { type: 'photo', media: 'images/surroundings/wat_phra_thong_temple/wat_phra_thong_temple2.jpeg' },
        ],
        callback: 'wat_phra_thong',
        description: `Храм Ват Пхра Тхонг (или Ват Пратхонг), что в переводе означает "Храм Золотого Будды", является очень древним храмом с невероятной легендой, которая неизменно привлекает людей. Хотя храм не очень большой и не слишком впечатляющий, основная цель большинства посетителей — увидеть знаменитое полузарытое золотое изображение Будды.

        Расположенный на дороге Thep Krasattri в районе Thep Krasattri, храм является домом для большого золотого изображения Будды, известного как Phra Phut. Видна только половина изображения, выступающая из земли, и оно считается священным для местных буддистов.
        
        На территории храма также находится музей, в котором можно увидеть многочисленные артефакты из ранних лет истории Пхукета, включая защитную одежду, использовавшуюся шахтерами во времена золотой лихорадки, а также бинты для ног, которые носили первые китайские поселенки.`,
        latitude: 12.345,
        longtitude: 14.435,
        isActive: true
      }, 
      wat_phra_nang_sang: {
        title: 'Wat Phra Nang Sang',
        images: [
          { type: 'photo', media: 'images/surroundings/wat_phra_nang_sang_temple/wat_phra_nang_sang_temple.jpeg' },         
          { type: 'photo', media: 'images/surroundings/wat_phra_nang_sang_temple/wat_phra_nang_sang_temple2.jpeg' }
        ],
        callback: 'wat_phra_nang_sang',
        description: `Расположенный примерно в 20 километрах от города, этот исторический храм является неоценимым источником знаний о прошлом Таланг. Территория храма когда-то использовалась как военный лагерь бирманцев в 1785 году. В убосоте (освященном зале) находятся три самых старых и крупнейших изображения Будды, выполненных из олова. Эти статуи называют Три Короля, и они расположены между тремя другими большими статуями. Чтобы добраться до храма, нужно ехать по дороге Thepkasattri, на перекрестке в районе Таланг повернуть налево и сразу продолжить путь в храм.

        Этот храм связан с легендой о Пхра Нанг Левд Кхао ("леди с белой кровью"). Согласно легенде, жена правителя города была преданной буддисткой, но ее обвинили в том, что она имела роман с другим мужчиной. Прежде чем ее наказали, она попросила разрешение поехать в Ланку, чтобы помолиться за Буддой реликвиями. На обратном пути она остановилась в Таланге (старое название Пхукета) и построила этот храм. Позже она вернулась домой и получила смертный приговор. Но поскольку она была невиновна, ее кровь стала белой. Храм был назван Ват Пхра Нанг Санг ("Храм, построенный дамой") и стал священным местом для местных жителей. В старой часовне храма находятся три старейших и крупнейших в мире статуи Будды, выполненные из олова, называемые Три Короля.`,
        latitude: 12.345,
        longtitude: 14.435,
        isActive: true
      }, 
    }
  }

}

const surroundingsTexts = {
  main_message: 'Test surroundings',
  sub_main_message: 'Вот что мы можем предложить',
}

module.exports = {surroundingsDescriptions, surroundingsTexts}