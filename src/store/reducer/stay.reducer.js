
const initialState = {
    stays:null,
    // currStay:null    
}

export function stayReducer(state = initialState, action) {
    var newState = state;
    switch (action.type) {
        case "SET_STAYS":
            newState={stays:action.stays}
            break;
         default:
    }
    return newState;
}