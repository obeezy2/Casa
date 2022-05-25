import {userService} from '../../services/user.service.js'

const initialState = {
    loggedinUser:userService.getLoggedinUser()     
}

export function userReducer(state = initialState, action) {
    var newState = state;
    switch (action.type) {
        case 'SET_USER':
            newState = {...state, loggedinUser: action.user } 
            break;
    }
    return newState;
}