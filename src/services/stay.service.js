import { storageService } from "./async.storage.service"
import { stay_db } from "../data/db"
import { httpService } from "./http.service";

const END_POINT = "stay"
const STORAGE_KEY = 'STAY_STORAGE_KEY'

_setupForLocalStorage()

const labels = [
  "Design",
  "Beach",
  "Amazing Pools",
  "Islands",
  "National Parks",
  "Cabins",
  // "OMG!",
  "Camping",
  "Tiny Homes",
  "Lakefront",
  "Arctic",
  // "Amazing views",
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
  getStaysForHost,
}

async function query(filterBy) {
  // if (!filterBy) {
  //   return await httpService.get(END_POINT)
  // }
  let stays = await storageService.query(STORAGE_KEY)

  if (filterBy) {
    const label = filterBy.label || null
    const stayLocation = filterBy.stayLocation || null
    if (label) {
      stays = _filterStaysByLabel(stays, label)
    }
    if (stayLocation) {
      stays = _filterStaysByLocation(stays, stayLocation)
    }
  }

  return stays
}
async function getStaysForHost(hostId) {
  let stays = await storageService.query(STORAGE_KEY)
  const hostArr = []
  stays.map((stay) => {
    if (stay.host['_id'] === hostId) {
      hostArr.push(stay)
    }
  })
  return hostArr
}

function getAmenities() {
  return [...amenities]
}
function getLabels() {
  return [...labels]
}

async function getById(stayId) {
  return storageService.get(STORAGE_KEY, stayId)
}

function _setupForLocalStorage() {
  if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stay_db))
  }
}

function _filterStaysByLocation(stays, location) {
  const regex = new RegExp(location, "i")
  stays = stays.filter((stay) => {
    if (
      regex.test(stay.address.street) ||
      regex.test(stay.address.country) ||
      regex.test(stay.address.city)
    ) {
      return true
    }
    return false
  })
  return stays
}

function _filterStaysByLabel(stays, label) {
  const regex = new RegExp(label, "i")
  stays = stays.filter((stay) => {
    if (
      regex.test(stay.name) ||
      regex.test(stay.summary) ||
      regex.test(stay.amenities)
    ) {
      return true
    }
    const isLabelsInReviews = stay.reviews.find((review) =>
      regex.test(review.txt)
    )
    if (isLabelsInReviews) return true
    return false
  })
  return stays
}
