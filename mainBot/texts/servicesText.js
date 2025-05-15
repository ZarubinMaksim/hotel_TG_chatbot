const { keyRequests, menuButtons } = require("../config/appItems");

const servicesDescription = {
  transportation: {
    title: menuButtons.transportation,
    keyRequest: keyRequests.transportation,
    managerBotMessage: 'Guest wants to order a trasfet! Please contact guest!',
    userReplyMsg: 'Мы свяжемся с вами чтобы подтвердить заказ ✅',
    img: 'images/rooms/lg_suite_3br/lg_suite_3br9.jpeg',
    isActive: true,
    description: `🚗 <b>Хотите заказать трансфер в аэропорт?</b>

Пожалуйста, отправьте нам следующие данные, и мы всё организуем для вас:
    
1️⃣ Дата и время поездки
2️⃣ Номер рейса ✈️
3️⃣ Контактный телефон 📞
4️⃣ Полное имя 🧑‍💼
5️⃣ Тип автомобиля — легковой 🚘 или минивэн 🚐
6️⃣ Количество человек 👥
    
📩 После получения информации мы свяжемся с вами для подтверждения трансфера!
    `
  },
  wake_up_call: {
    title: menuButtons.wake_up_call,
    keyRequest: keyRequests.wake_up_call,
    managerBotMessage: 'Guest wants to order a wake up call! Please contact guest!',
    userReplyMsg: 'Мы свяжемся с вами чтобы подтвердить время побудки ✅',
    img: 'images/rooms/lg_suite_3br/lg_suite_3br9.jpeg',
    isActive: true,
    description: `😴 <b>Позаботимся о вашем пробуждении!</b>
    
Если вам нужно, чтобы мы разбудили вас, просто отправьте нам время.

Мы подтвердим заказ и позаботимся, чтобы вы не проспали важное. 💬🔔`,
  },
  breakfastBox: {
    title: menuButtons.breakfastBox,
    keyRequest: keyRequests.breakfastBox,
    managerBotMessage: 'Guest wants to order a brekfast box! Please contact guest!',
    userReplyMsg: 'Мы свяжемся с вами чтобы подтвердить заказ✅',
    img: 'images/rooms/lg_suite_3br/lg_suite_3br9.jpeg',
    isActive: true,
    description: `🍱 <b>Ранний выезд — не повод уезжать голодным!</b>

Сообщите нам, во сколько вы уезжаете, и мы соберём для вас завтрак с собой.

📬 Подтверждение времени отправим в ответ.`,
  },
  luggageDown: {
    title: menuButtons.luggageDown,
    keyRequest: keyRequests.luggageDown,
    managerBotMessage: 'Guest needs help with luggage! Please contact guest!',
    userReplyMsg: 'Мы свяжемся с вами чтобы подтвердить заказ✅',
    img: 'images/rooms/lg_suite_3br/lg_suite_3br9.jpeg',
    isActive: true,
    description: `🧳 <b>Нужна помощь с багажом?</b>

Пожалуйста, сообщите, во сколько нужно подойти — и мы обязательно поможем!
Мы рядом и всегда готовы помочь 🤝`,
  }
};

const servicesText = {
  main_message: '💡 Посмотрите, что у нас есть:',
};

module.exports = { servicesDescription, servicesText };