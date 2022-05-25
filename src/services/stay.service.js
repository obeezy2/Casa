import { storageService } from "./async.storage.service";
import { stay_db } from "../data/db";

const STORAGE_KEY = "STAY_STORAGE_KEY";

_setupForLocalStorage();

export const stayService = {
  query,
};

async function query(filterBy) {
  if (filterBy) {
  } else {
    return storageService.query(STORAGE_KEY)
  }
}

function _setupForLocalStorage() {
  if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stay_db));
  }
}
