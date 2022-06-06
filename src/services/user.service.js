// import { storageService } from './async.storage.service'
// import { user_db } from "../data/db";
import { httpService } from "./http.service"

const END_POINT_AUTH = {
  signup: "auth/signup",
  login: "auth/login",
  logout: "auth/logout",
}
const END_POINT_USER = "user"

const STORAGE_KEY_LOGGEDIN_USER = "loggedInUser"

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
  setNotification
}

// function _setupForLocalStorage() {
//     if (!localStorage.getItem(STORAGE_KEY)) {
//         localStorage.setItem(STORAGE_KEY, JSON.stringify(user_db));
//     }
// }

async function getUsers() {
  return await httpService.get(END_POINT_USER)

  //return storageService.query(STORAGE_KEY)
}

async function getById(userId) {
  return await httpService.get(END_POINT_USER, userId)

  //   const user = await storageService.get('user', userId)
  //     return user;
}

async function remove(userId) {
  return await httpService.delete(`${END_POINT_USER}/${userId}`)

  // return storageService.remove('user', userId)
}

async function update(user) {
  const updatedUser = await httpService.put(
    `${END_POINT_USER}/${user._id}`,
    user
  )
  sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(updatedUser))
  return updatedUser
}

async function login(userCred) {
  try {
    const user = await httpService.post(END_POINT_AUTH.login, userCred)
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
  } catch (err) {
    console.log("Failed to login", err.msg)
  }

  //    try {
  //         const users = await storageService.query(STORAGE_KEY)
  //         const user = users.find(user => user.username === userCred.username && user.password === userCred.password)
  //         sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
  //         return user
  //     } catch (err) {
  //         console.log('Failed to login', err);
  //     }
}

// need username fullname and password
async function signup(userCred) {
  try {
    debugger
    const user = await httpService.post(END_POINT_AUTH.signup, userCred)
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
  } catch (err) {
    console.log("Failed to signup", err.msg)
  }

  //   try {
  //         const user = await storageService.post(STORAGE_KEY, userCred)
  //         sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
  //         return user
  //     } catch (err) {
  //         console.log('Failed to signup', err);
  //     }
}

async function logout() {
  await httpService.post(END_POINT_AUTH.logout)
  sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)

  //   sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)

// function _saveLocalUser(user) {
//     sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
//     return user
}

function getLoggedinUser() {
  return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER)) || null
}

function setNotification(hasNotification){
  const user=getLoggedinUser()
  user.notification=hasNotification
  sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
  return user
}