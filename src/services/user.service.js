import { storageService } from './async-storage.service'
const logedInUser = 'loggedinUser'

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

window.userService = userService


function getUsers() {
    return storageService.query('userDB')
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

