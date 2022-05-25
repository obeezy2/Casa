import {userReducer} from './reducer/user.reducer.js'
import {stayReducer} from './reducer/stay.reducer.js'

import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'


const rootReducer = combineReducers({
    userModule:userReducer,
    stayModule:stayReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))