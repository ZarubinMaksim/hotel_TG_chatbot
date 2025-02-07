const infrastructureMainText = `This is infrastructure`;

const infrastructureDescriptions = {
  pool: {
    title: '🏊🏻‍♀️ Бассейн',
    images: [
      { type: 'photo', media: 'images/infrastructure/pool/pool.jpeg' },
      { type: 'photo', media: 'images/infrastructure/pool/pool2.jpeg' },
      { type: 'photo', media: 'images/infrastructure/pool/pool3.jpeg' },
    ],
    callback: 'pool',
    description: `СИСТЕМА ОЧИСТКИ ВОДЫ ОТ POOLNOLOGIES | ПРОШЛА ТЕСТИРОВАНИЕ NSF

    В наших бассейнах не используется хлор и другие химикаты.
    Мы поддерживаем щелочной уровень pH и высокое качество воды, чтобы избежать аллергических реакций или раздражений на коже у наших маленьких гостей. Наслаждайтесь купанием в чистой, натуральной воде, как в горном озере.
    
    Часы работы: с 8:00 до 20:00.`,
    isActive: true
  },
  lobby: {
    title: '🛎 Лобби',
    images: [
      { type: 'photo', media: 'images/infrastructure/lobby/lobby.jpeg' },
      { type: 'photo', media: 'images/infrastructure/lobby/lobby2.jpeg' },
      { type: 'photo', media: 'images/infrastructure/lobby/lobby3.jpeg' },
    ],
    callback: 'lobby',
    description: `24-ЧАСОВЫЕ УСЛУГИ В ЛОББИ

    У нас вы можете воспользоваться услугами ресепшена, где вам предложат освежающие напитки, пока вы ожидаете регистрацию или выезд. Наслаждайтесь круглосуточным доступом к запланированным трансферам на пляж, в аэропорт и услугам консьержа.
    
    Часы обслуживания: 24 часа.`,
    isActive: true
  },
  gym: {
    title: '🏋🏼‍♂️ Фитнес-центр',
    images: [
      { type: 'photo', media: 'images/infrastructure/gym/gym.jpeg' },
      { type: 'photo', media: 'images/infrastructure/gym/gym2.jpeg' },
      { type: 'photo', media: 'images/infrastructure/gym/gym3.jpeg' },
    ],
    callback: 'gym',
    description: `ФИТНЕС-ЦЕНТР

    Отель предлагает первоклассный фитнес-центр площадью 253 м² для превосходных тренировок. Оснащённый современным оборудованием и удобствами, включая раздевалку, наш зал предлагает фитнес на высшем уровне. С кондиционированием и круглосуточным доступом, фитнес-центр легко доступен и предлагает гибкие варианты, соответствующие вашему образу жизни.
    
    Часы работы: 24 часа.`,
    isActive: true
  },
  sauna: {
    title: '🧖🏼‍♂️ Сауна',
    images: [
      { type: 'photo', media: 'images/infrastructure/sauna/sauna.jpeg' },
    ],
    callback: 'sauna',
    description: `Повысьте эффективность своих тренировок с бесплатной сауной в фитнес-центре La Green Hotel! 
    После интенсивной тренировки расслабьтесь в успокаивающем тепле сауны, чтобы снять напряжение в мышцах, детоксифицировать организм и обновить ум. 
    Открыта ежедневно для всех гостей.

    Часы работы: с 9:00 до 19:00.`,
    isActive: true
  },
  yoga_terrace: {
    title: '🧘🏼‍♂️ Терраса для йоги',
    images: [
      { type: 'photo', media: 'images/infrastructure/yoga_terrace/yoga_terrace.jpeg' },
    ],
    callback: 'yoga_terrace',
    description: `В процессе строительства`,
    isActive: true
  },
  running_lines: {
    title: '🏃🏽‍♂️ Дорожки для бега',
    images: [
      { type: 'photo', media: 'images/infrastructure/running_lines/running_lines.jpeg' },
    ],
    callback: 'running_lines',
    description: `Наслаждайтесь утренней пробежкой перед завтраком или вечерней прогулкой по нашим дорожкам. 
    Для гостей отеля доступны три отдельных дорожки по 100 метров. Мягкое покрытие дорожек создаёт отличные условия 
    для поддержания ежедневного режима тренировок или просто для приятной прогулки.

    В процессе строительства.`,
    isActive: true
  },
  workout: {
    title: '🤸🏽‍♂️ Спортивная площадка',
    images: [
      { type: 'photo', media: 'images/infrastructure/workout/workout.jpeg' },
    ],
    callback: 'workout',
    description: `На открытой спортивной площадке отеля предусмотрена зона для любителей активного образа жизни. 
    Просторная площадка площадью 430 м² предлагает тренажёрные брусья, гантели и разнообразное современное оборудование для 
    спортивных игр и персонализированных тренировок.

    В процессе строительства.`,
    isActive: true
  },
}

module.exports = { infrastructureMainText, infrastructureDescriptions }