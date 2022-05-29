import { stayService } from "../../services/stay.service";

export function loadStays(filterBy = null) {
  return async (dispatch) => {
    try {
      const stays = await stayService.query(filterBy);
      const action = {
        type: "SET_STAYS",
        stays,
      };
      dispatch(action);
    } catch (err) {
      console.error(err);
    }
  };
}

export function setFilterBy(filterBy){
  console.log('test action')
    // return (dispatch) => {
    //   console.log('filterby from action ',filterBy)
    //    // dispatch({ type: 'SET_FILTER_BY', filterBy })
    // } 
}