const { createTwoLinedKeyboard } = require("../components/commomFunctions")
const menuButtons = require("../texts/menuButtons")
const { surroundingsDescriptions } = require("../texts/surroundText")

const activeSurroundings = Object.values(surroundingsDescriptions).filter(surrounding => surrounding.isActive).map(surrounding => surrounding.title)
const keyboard = createTwoLinedKeyboard(activeSurroundings)


const surroundingsKeyboards = {
  surroundingsKeyboard: [
    [menuButtons.to_main_menu],
    ...keyboard
  ],
}

const surroundingsSubKeyboard = (data) => [
  [menuButtons.to_main_menu],
  [menuButtons.back],
  ...Object.values(data.items).filter(item => item.isActive).map(item => [item.title])
]

module.exports = { surroundingsKeyboards, surroundingsSubKeyboard}