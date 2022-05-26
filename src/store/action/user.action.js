import { userService } from '../../services/user.service'

export function onLogin(credentials) {
    try {
        return async (dispatch) => {
            const user = await userService.login(credentials)

            dispatch({
                type: 'SET_USER',
                user,
            })
        }
    } catch (err) {
        console.log('Failed to login', err)
    }
}

export function onLogout() {
    try {
        return async (dispatch) => {
            await userService.logout()

            dispatch({
                type: 'SET_USER',
                user: null,
            })
        }
    } catch (err) {
        console.log('Failed to load logout', err)
    }
}
export function onSignup(newUser) {
    try {
        return async (dispatch) => {
            const user = await userService.signup(newUser)

            dispatch({
                type: 'SET_USER',
                user: user,
            })
        }
    } catch (err) {
        console.log('Failed to signup', err)
    }
}
