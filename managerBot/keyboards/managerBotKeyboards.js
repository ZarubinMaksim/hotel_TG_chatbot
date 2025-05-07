const menuButtons = require("../config/menuButtons");


const profileMainMenu = [
  [{ text: menuButtons.update_guest, callback_data: 'update_guest_details'}],
  [{ text: menuButtons.check_out_guest, callback_data: 'request_delete-guest'}],
];

const updateProfileMenu = [
  [{text: menuButtons.update_lastname, callback_data: 'update_guest_lastname'}],
  [{text: menuButtons.update_name, callback_data: 'update_guest_name'}],
  [{text: menuButtons.update_room, callback_data: 'update_guest_room'}],
  [{text: menuButtons.update_arrival, callback_data: 'update_guest_arrival'}],
  [{text: menuButtons.update_departure, callback_data: 'update_guest_departure'}],
];

const deleteGuestMenu = [
  [{ text: menuButtons.check_out_guest, callback_data: 'delete_guest'}],
  [{ text: menuButtons.cancel, callback_data: 'cancel'}],
];

const checkoutAllGuests = [
  [{ text: menuButtons.confirm, callback_data: 'confirm_checkout_all'}, { text: menuButtons.decline, callback_data: 'cancel_checkout_all'}]
];

module.exports = { profileMainMenu, updateProfileMenu, deleteGuestMenu, checkoutAllGuests };
