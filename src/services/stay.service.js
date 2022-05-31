import { storageService } from "./async.storage.service";
import { stay_db } from "../data/db";

const STORAGE_KEY = "STAY_STORAGE_KEY";

_setupForLocalStorage();

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
  "Amazing views",
  "Desert",
  "Surfing",
  "Mansions",
  "Skiing",
  "Historical homes",
  "Campers"
];

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
];

export const stayService = {
  query,
  getById,
  amenities,
  labels
};

async function query(filterBy) {
  let stays = await storageService.query(STORAGE_KEY);
  if (filterBy) {
    const label = filterBy.label||null;
    if (label) {
      stays = stays.filter((stay) => {
        if (
          stay.name.toLowerCase().includes(label.toLowerCase()) ||
          stay.summary.toLowerCase().includes(label.toLowerCase()) ||
          stay.amenities.includes(label)
        ) {
          return true;
        }
        stay.reviews.forEach((review) => {
          if (review.txt.toLowerCase().includes(label.toLowerCase()))
            return true;
        });
        return false;
      });
    }
  }

  return stays;
}

async function getById(stayId) {
  return storageService.get(STORAGE_KEY, stayId);
}

function _setupForLocalStorage() {
  if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stay_db));
  }
}
