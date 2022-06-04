// import { storageService } from "./async.storage.service";
// import { order_db } from "../data/db";
import { httpService } from "./http.service";

// import { stayService } from "./stay.service";

// const STORAGE_KEY = "ORDERS_STORAGE_KEY";
// _setupForLocalStorage();

const END_POINT="order"

export const orderService = {
  query,
  // getBookedDates,
  saveOrder,
  // updateOrder,
  getById,//backend funtion only
  remove //backend funtion only
};

// testBack()

async function testBack(){
  // await remove('6299dfd1dd2c762014964050')
  // console.log(order);
}


// you can pass in filterBy {userId,hostId,stayId}
async function query(filterBy) {
  return await httpService.get(END_POINT,filterBy)
  // let orders = await storageService.query(STORAGE_KEY);
  // if (!filterBy) return orders;
  // if (filterBy.stayId) {
  //   orders = orders.filter((order) => order.stay._id === filterBy.stayId);
  // }
  // if (filterBy.hostId) {
  //   orders = orders.filter((order) => order.stay.host._id === filterBy.hostId);
  // }
  // if (filterBy.userId) {
  //   orders = orders.filter((order) => order.miniUser._id === filterBy.userId);
  // }
  // return orders;
}

async function getById(orderId){
  return await httpService.get(`${END_POINT}/${orderId}`)
}

async function remove(orderId){
  return await httpService.delete(`${END_POINT}/${orderId}`)
}

// to add an order you have to give {stayId,hostId,startDate,endDate}
async function saveOrder(order) {
  if(!order._id) return await httpService.post(END_POINT,order)
  else return await httpService.put(END_POINT,order)

  // try {
  //   const bookedDates = await getBookedDates(order.stayId);
  //   const isAvailable = await _checkAvailability(
  //     order.startDate,
  //     order.endDate,
  //     bookedDates
  //   );
  //   const stay = await stayService.getById(order.stayId)
  //   delete order.stayId
  //   order.stay = stay
  //   order.status = 'Pending'
  //   await storageService.post(STORAGE_KEY, order)
  // } catch (err) {
  //   console.error(err);
  // }
}

// async function updateOrder(order) {
  // try {
  //   await storageService.put(STORAGE_KEY, order)
  // } catch (err) {
  //   console.error(err);
  // }
// }

// async function _checkAvailability(startDate, endDate, bookedDates) {

//   const problemDates = bookedDates.filter((date) => {
//     if (endDate >= date.startDate && endDate <= date.endDate) {
//       return true;
//     } else if (
//       endDate > date.endDate &&
//       startDate >= date.startDate &&
//       startDate <= date.endDate
//     ) {
//       return true;
//     }
//     return false;
//   });
//   return (problemDates.length > 0) ? Promise.reject('not availble') : Promise.resolve(true)
// }

// async function getBookedDates(stayId) {
//   const orders = await query({ stayId });
//   const bookedDates = orders.map((order) => ({
//     startDate: order.startDate,
//     endDate: order.endDate,
//   }));
//   return bookedDates;
// }

// function _setupForLocalStorage() {
//   if (!localStorage.getItem(STORAGE_KEY)) {
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(order_db));
//   }
// }



