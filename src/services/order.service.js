import { httpService } from "./http.service";

const END_POINT = "order";

export const orderService = {
  query,
  // getBookedDates,
  saveOrder,
  updateOrder,
  getById, //backend funtion only
  remove, //backend funtion only
};

testBack();

async function testBack() {
  const order = await query({ hostId: 1 });
  console.log(order);
}

// you can pass in filterBy {userId,hostId,stayId}
async function query(filterBy) {
  return await httpService.get(END_POINT, filterBy);
}

async function getById(orderId) {
  return await httpService.get(`${END_POINT}/${orderId}`);
}

async function remove(orderId) {
  return await httpService.delete(`${END_POINT}/${orderId}`);
}

// to add an order you have to give {stayId,hostId,startDate,endDate}
async function saveOrder(order) {
  if (!order._id) return await httpService.post(END_POINT, order);
  else return await httpService.put(END_POINT, order);
}

async function updateOrder(order) {
  if (!order) return
  await httpService.put(END_POINT, order);
}
