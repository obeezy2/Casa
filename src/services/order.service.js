import { storageService } from "./async.storage.service";
import { order_db } from "../data/db";
import { stayService } from "./stay.service";

const STORAGE_KEY = "ORDERS_STORAGE_KEY";
_setupForLocalStorage();

export const orderService = {
  query,
  getBookedDates,
  addOrder,
};

async function query(filterBy) {
  let orders = await storageService.query(STORAGE_KEY);
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
  return orders;
}

async function addOrder(order) {
  try {
    const bookedDates = await getBookedDates(order.stayId);
    const isAvailable = await _checkAvailability(
      order.startDate,
      order.endDate,
      bookedDates
    );
    const stay=await stayService.getById(order.stayId)
    delete order.stayId
    order.stay=stay
    await storageService.post(STORAGE_KEY,order) 
  } catch (err) {
    console.error(err);
  }
}

async function _checkAvailability(startDate, endDate, bookedDates) {
  debugger
  const problemDates = bookedDates.filter((date) => {
    if (endDate >= date.startDate && endDate <= date.endDate) {
      return true;
    } else if (
      endDate > date.endDate &&
      startDate >= date.startDate &&
      startDate <= date.endDate
    ) {
      return true;
    }
    return false;
  });
  return (problemDates.length>0)?Promise.reject('not availble'):Promise.resolve(true)
}

async function getBookedDates(stayId) {
  const orders = await query({ stayId });
  const bookedDates = orders.map((order) => ({
    startDate: order.startDate,
    endDate: order.endDate,
  }));
  return bookedDates;
}

function _setupForLocalStorage() {
  if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(order_db));
  }
}
