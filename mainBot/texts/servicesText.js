const servicesDescription = {
  transfer: {
    title: '🚕 Трансфер',
    keyRequest: 'transfer',
    managerBotMessage: 'Guest wants to order a trasfet! Please contact guest!',
    img: 'images/rooms/lg_suite_3br/lg_suite_3br9.jpeg',
    isActive: true,
    description: `Если вам необходимо заказать трансфер в аэропорт, пожалуйста, предоставьте нам: 
  
    1. Дата и время - 
    2. Номер рейса - 
    3. Контактный телефон - 
    4. Полное имя - 
    5. Тип автомобиля (легковой или минивен) - 
    6. Количество человек - 
  
    Мы свяжемся с вами чтобы подтвердить заказ!
    `
  },
  wakeup: {
    title: '⏰ Побудка',
    keyRequest: 'wakeup',
    managerBotMessage: 'Guest wants to order a wake up call! Please contact guest!',
    img: 'images/rooms/lg_suite_3br/lg_suite_3br9.jpeg',
    isActive: true,
    description: 'Если вас нуно разбудить, пожалуйста, напишите нам в какое время. МЫ свяжемся с вами чтобы подтвердить заказ.'
  },
  breakfastBox: {
    title: '🥡 Завтрак с собой',
    keyRequest: 'breakfastBox',
    managerBotMessage: 'Guest wants to order a brekfast box! Please contact guest!',
    img: 'images/rooms/lg_suite_3br/lg_suite_3br9.jpeg',
    isActive: true,
    description: 'Есть у вас ранний выезд, закажите завтрак с собой! Пожалуйста, напишите время вашего выезда. Мы свяжемся с вами чтобы подтвердить заказ.'
  },
  luggageDown: {
    title: '🧳 Помочь с багажем',
    keyRequest: 'luggageDown',
    managerBotMessage: 'Guest needs help with luggage! Please contact guest!',
    img: 'images/rooms/lg_suite_3br/lg_suite_3br9.jpeg',
    isActive: true,
    description: 'Если нужна помощь с багажем напишите во сколько нам нужно подойти.'
  }
}

const servicesText = {
  main_message: 'Вот что мы можем предложить'
}

module.exports = {servicesDescription, servicesText}