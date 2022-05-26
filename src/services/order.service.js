import { storageService } from "./async.storage.service";
import { order_db } from "../data/db";

const STORAGE_KEY = "ORDERS_STORAGE_KEY";
_setupForLocalStorage();

export const orderService = {
  query,
  getBookedDates
};

async function query(filterBy) {
  let orders = await storageService.query(STORAGE_KEY);
  debugger
  if (!filterBy) return orders;
  if (filterBy.stayId) {
    orders = orders.filter((order) => order.stay._id === filterBy.stayId);
  }
  if (filterBy.hostId) {
    orders = orders.filter((order) => order.stay.host._id === filterBy.hostId);
  }
  if (filterBy.userId) {
    orders = orders.filter((order) => order.miniUser._id === filterBy.userId);
  }
  return orders
}

async function getBookedDates(stayId){
    const orders=await query({stayId})
    const bookedDates=orders.map(order=>({startDate:order.startDate,endDate:order.endDate}))
    return bookedDates
}

function _setupForLocalStorage() {
  if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(order_db));
  }
}
