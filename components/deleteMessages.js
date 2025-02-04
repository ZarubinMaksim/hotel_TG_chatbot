const deleteMessage = (bot, chatId, id) => {
  bot.deleteMessage(chatId, id)
}

const deleteMediaGroup = async (bot, chatId, currentMessageId, mediaGroupIdsToDelete, ) => {
  await bot.deleteMessage(chatId, currentMessageId)
  mediaGroupIdsToDelete.forEach(async (id) => {
    try {
      await bot.deleteMessage(chatId, id);
      console.log(`Message ${id} deleted.`);
    } catch (error) {
      console.error(`Error deleting message ${id}:`, error);
    }
  });
}

module.exports = {deleteMessage, deleteMediaGroup}