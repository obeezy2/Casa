
const initialState = {
    stays:null,
    // currStay:null
    filterBy:null 
}

export function stayReducer(state = initialState, action) {
    var newState = state;
    switch (action.type) {
        case "SET_STAYS":
            newState={stays:action.stays}
            break;
        case 'SET_FILTER_BY':
            return {
                ...newState,
                filterBy: action.filterBy
            }         
         default:
    }
    return newState;
}