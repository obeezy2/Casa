import { stayService } from "../../services/stay.service";

export function loadStays() {
  return async (dispatch, getState) => {
    try {
      const { filterBy } = getState().stayModule;
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

export function setFilterBy(filterBy) {
  return (dispatch) => {
    dispatch({ type: "SET_FILTER_BY", filterBy });
  };
}
