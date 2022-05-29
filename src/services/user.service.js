import { storageService } from './async.storage.service'
import { user_db } from "../data/db";

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

const STORAGE_KEY = 'USER_STORAGE_KEY'
_setupForLocalStorage()
export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
    getUsers,
    getById,
    remove,
    update,
}

// To help debugging from console
window.userService = userService

function _setupForLocalStorage() {
    if (!localStorage.getItem(STORAGE_KEY)) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(user_db));
    }
}


function getUsers() {
    return storageService.query(STORAGE_KEY)
}

async function getById(userId) {
    const user = await storageService.get('user', userId)
    return user;
}
function remove(userId) {
    return storageService.remove('user', userId)
}

async function update(userCred) {
    const user = await storageService.put('userDB', userCred)
    if (getLoggedinUser()._id === user._id) _saveLocalUser(user)
    return user;
}

async function login(userCred) {
    const users = await storageService.query(STORAGE_KEY)
    const user = users.find(user => user.username === userCred.username && user.password === userCred.password)
    return _saveLocalUser(user)

}
async function signup(userCred) {
    const user = await storageService.post(STORAGE_KEY, userCred)
    return _saveLocalUser(user)
}
async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
}


function _saveLocalUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER) || null)
}


