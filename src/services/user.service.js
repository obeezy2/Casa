// import { storageService } from './async.storage.service'
// import { user_db } from "../data/db";
import { httpService } from "./http.service";

const END_POINT_AUTH = {
  signup: "auth/signup",
  login: "auth/login",
  logout: "auth/logout",
};
const END_POINT_USER = "user";

const STORAGE_KEY_LOGGEDIN_USER = "loggedInUser";

// const STORAGE_KEY = 'USER_STORAGE_KEY'
// _setupForLocalStorage()

export const userService = {
  login,
  logout,
  signup,
  getLoggedinUser,
  getUsers,
  getById,
  remove,
  update,
  setNotification,
};

async function getUsers() {
  return await httpService.get(END_POINT_USER);
}

async function getById(userId) {
  return await httpService.get(END_POINT_USER, userId);
}

async function remove(userId) {
  return await httpService.delete(`${END_POINT_USER}/${userId}`);
}

async function update(user) {
  const updatedUser = await httpService.put(
    `${END_POINT_USER}/${user._id}`,
    user
  );
  sessionStorage.setItem(
    STORAGE_KEY_LOGGEDIN_USER,
    JSON.stringify(updatedUser)
  );
  return updatedUser;
}

async function login(userCred) {
  try {
    const user = await httpService.post(END_POINT_AUTH.login, userCred);
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user));
    return user;
  } catch (err) {
    console.log("Failed to login", err.msg);
  }
}

async function signup(userCred) {
  try {
    debugger;
    const user = await httpService.post(END_POINT_AUTH.signup, userCred);
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user));
    return user;
  } catch (err) {
    console.log("Failed to signup", err.msg);
  }
}

async function logout() {
  await httpService.post(END_POINT_AUTH.logout);
  sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER);
}

function getLoggedinUser() {
  return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER)) || null;
}

function setNotification(hasNotification) {
  const user = { ...getLoggedinUser() };
  user.notification = hasNotification;
  sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user));
  return user;
}
