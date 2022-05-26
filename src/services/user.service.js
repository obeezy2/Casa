import axios from 'axios'

const STORAGE_KEY_LOGGEDIN = 'loggedinUser'

export const userService = {
    login,
    getLoggedinUser,
    logout,
    signup,

}

const BASE_URL = `http://localhost:3030/api/auth/`


async function login(credentials) {
    try {
        // const user = await httpService.post('auth/login', credentials)
        const res = await axios.post(`${BASE_URL}login`, credentials)
        const user = res.data
        sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user))
        return user
    } catch (err) {
        console.log('Failed to login', err);
    }

}
async function signup(userInfo) {

    try {
        // const user = await httpService.post('auth/signup', userInfo)
        const res = await axios.post(`${BASE_URL}signup`, userInfo)
        const user = res.data
        sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user))
        return user
    } catch (err) {
        console.log('Failed to signup', err);
    }

}

async function logout() {
    try {
        // await httpService.post('auth/logout')
        await axios.post(`${BASE_URL}logout`)
        sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, null)
        return Promise.resolve()
    } catch (err) {
        console.log('Failed to logout', err);
    }
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN))
}

