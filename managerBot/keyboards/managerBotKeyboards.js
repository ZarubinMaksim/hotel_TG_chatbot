
const profileMainMenu = [
  [{ text: '🔄 Update guest', callback_data: 'update_guest_details'}],
  [{ text: '❌ Check out guest', callback_data: 'request_delete-guest'}],
]

const updateProfileMenu = [
  [{text: '🔄 Update lastname', callback_data: 'update_guest_lastname'}],
  [{text: '🔄 Update name', callback_data: 'update_guest_name'}],
  [{text: '🔄 Update room', callback_data: 'update_guest_room'}],
  [{text: '🔄 Update arrival', callback_data: 'update_guest_arrival'}],
  [{text: '🔄 Update departure', callback_data: 'update_guest_departure'}],
]

const deleteGuestMenu = [
  [{ text: '❌ Check out guest', callback_data: 'delete_guest'}],
  [{ text: 'Cancel', callback_data: '1'}],

]

module.exports = { profileMainMenu, updateProfileMenu, deleteGuestMenu}
