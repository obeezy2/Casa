import { storageService } from './async-storage.service'
const logedInUser = 'loggedinUser'
const STORAGE_KEY = 'USER_STORAGE_KEY'
import { user_db } from "../data/db";

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
_setupForLocalStorage()
window.userService = userService
_setupForLocalStorage()

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
    const users = await storageService.query('userDB')
    const user = users.find(user => user.username === userCred.username && user.password === userCred.password)
    return _saveLocalUser(user)
}
async function signup(userCred) {
    const user = await storageService.post('userDB', userCred)
    return _saveLocalUser(user)
}
async function logout() {
    localStorage.removeItem(logedInUser)
}


function _saveLocalUser(user) {
    localStorage.setItem(logedInUser, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(localStorage.getItem(logedInUser) || null)
}

function _setupForLocalStorage() {
    if (!localStorage.getItem(STORAGE_KEY)) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(user_db));
    }
}
