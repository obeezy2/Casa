// import { storageService } from "./async.storage.service"
// import { stay_db } from "../data/db"
import { httpService } from "./http.service"

const END_POINT = "stay"

const labels = [
  "Design",
  "Beach",
  "Amazing Pools",
  "Islands",
  "National Parks",
  "Cabins",
  "Camping",
  "Tiny Homes",
  "Lakefront",
  "Arctic",
  "Desert",
  "Surfing",
  "Mansions",
  "Skiing",
  "Historical homes",
  "Campers",
]
const amenities = [
  "TV",
  "Cable TV",
  "Internet",
  "Wifi",
  "Air conditioning",
  "Wheelchair accessible",
  "Pool",
  "Kitchen",
  "Free parking on premises",
  "Doorman",
  "Gym",
  "Elevator",
  "Hot tub",
  "Heating",
  "Family/kid friendly",
  "Suitable for events",
  "Washer",
  "Dryer",
  "Smoke detector",
  "Carbon monoxide detector",
  "First aid kit",
  "Safety card",
  "Fire extinguisher",
  "Essentials",
  "Shampoo",
  "24-hour check-in",
  "Hangers",
  "Hair dryer",
  "Iron",
  "Laptop friendly workspace",
  "Self check-in",
  "Building staff",
  "Private entrance",
  "Room-darkening shades",
  "Hot water",
  "Bed linens",
  "Extra pillows and blankets",
  "Ethernet connection",
  "Luggage dropoff allowed",
  "Long term stays allowed",
  "Ground floor access",
  "Wide hallway clearance",
  "Step-free access",
  "Wide doorway",
  "Flat path to front door",
  "Well-lit path to entrance",
  "Disabled parking spot",
  "Step-free access",
  "Wide doorway",
  "Wide clearance to bed",
  "Step-free access",
  "Wide doorway",
  "Step-free access",
  "Wide entryway",
  "Waterfront",
  "Beachfront",
]
export const stayService = {
  query,
  getById,
  getAmenities,
  getLabels,
  saveStay,
  deleteStay
}
// QUERY you can pass as a filter {hostId,stayLocation,label}
async function query(filterBy) {
  return await httpService.get(END_POINT, filterBy)

}

function getAmenities() {
  return [...amenities]
}
function getLabels() {
  return [...labels]
}
async function getById(stayId) {
  return await httpService.get(`${END_POINT}/${stayId}`)
}

async function deleteStay(stayId) {
  return await httpService.delete(`${END_POINT}/${stayId}`)
}
async function saveStay(stay) {
  if (!stay._id) return await httpService.post(END_POINT, stay)
  else return await httpService.put(`${END_POINT}/${stay._id}`, stay)
}
