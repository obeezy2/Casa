
const initialState = {
    stays:null,
    filterBy:null 
}

export function stayReducer(state = initialState, action) {
    var newState = state;
    switch (action.type) {
        case "SET_STAYS":
            newState={stays:action.stays}
            break;
        case 'SET_FILTER_BY':
            newState = {
                ...state,
                filterBy: action.filterBy
            } 
            break;        
         default:
    }
    return newState;
}