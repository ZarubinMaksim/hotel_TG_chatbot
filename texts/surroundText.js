const surroundingsDescriptions = {
  beach: {
    title: 'Пляжи', 
    items: {
      layan_beach: {
        title: 'Пляж Лаян',
        image: 'images/infrastructure/pool.jpeg',
        callback: 'layan_beach',
        description: `Классный пляж лаян`,
        latitude: 12.345,
        longtitude: 14.435,
        isActive: true
      }, 
      banana_beach: {
        title: 'Пляж Банана',
        image: 'images/infrastructure/pool.jpeg',
        callback: 'banana_beach',
        description: `Классный пляж банана`,
        latitude: 12.345,
        longtitude: 14.435,
        isActive: true
      },
    }
  }, 
  museums: {
    title: 'Музеи',
    items: {
      tiger_museum: {
        title: 'Музей тигра',
        image: 'images/infrastructure/pool.jpeg',
        callback: 'tiger_museum',
        description: `Классный музей тигра`,
        latitude: 12.345,
        longtitude: 14.435,
        isActive: true
      }, 
      elephatns_museum: {
        title: 'Слоны',
        image: 'images/infrastructure/pool.jpeg',
        callback: 'elephatns_museum',
        description: `Классный музей слонов`,
        latitude: 12.345,
        longtitude: 14.435,
        isActive: true
      }, 
    }
  }



}

module.exports = {surroundingsDescriptions}