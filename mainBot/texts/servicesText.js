const { keyRequests, menuButtons } = require("../config/appItems");

const servicesDescription = {
  transportation: {
    title: menuButtons.transportation,
    keyRequest: keyRequests.transportation,
    managerBotMessage: 'Guest wants to order a trasfet! Please contact guest!',
    userReplyMsg: 'Мы свяжемся с вами чтобы подтвердить заказ ✅',
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
  wake_up_call: {
    title: menuButtons.wake_up_call,
    keyRequest: keyRequests.wake_up_call,
    managerBotMessage: 'Guest wants to order a wake up call! Please contact guest!',
    userReplyMsg: 'Мы свяжемся с вами чтобы подтвердить время побудки ✅',
    img: 'images/rooms/lg_suite_3br/lg_suite_3br9.jpeg',
    isActive: true,
    description: 'Если вас нуно разбудить, пожалуйста, напишите нам в какое время. МЫ свяжемся с вами чтобы подтвердить заказ.'
  },
  breakfastBox: {
    title: menuButtons.breakfastBox,
    keyRequest: keyRequests.breakfastBox,
    managerBotMessage: 'Guest wants to order a brekfast box! Please contact guest!',
    userReplyMsg: 'Мы свяжемся с вами чтобы подтвердить заказ✅',
    img: 'images/rooms/lg_suite_3br/lg_suite_3br9.jpeg',
    isActive: true,
    description: 'Есть у вас ранний выезд, закажите завтрак с собой! Пожалуйста, напишите время вашего выезда. Мы свяжемся с вами чтобы подтвердить заказ.'
  },
  luggageDown: {
    title: menuButtons.luggageDown,
    keyRequest: keyRequests.luggageDown,
    managerBotMessage: 'Guest needs help with luggage! Please contact guest!',
    userReplyMsg: 'Мы свяжемся с вами чтобы подтвердить заказ✅',
    img: 'images/rooms/lg_suite_3br/lg_suite_3br9.jpeg',
    isActive: true,
    description: 'Если нужна помощь с багажем напишите во сколько нам нужно подойти.'
  }
};

const servicesText = {
  main_message: 'Вот что мы можем предложить',
};

module.exports = { servicesDescription, servicesText };