import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

// import { StayFilter } from "../cmps/stay-filter"
import { StayList } from "../cmps/stay-list"
import { loadStays } from "../store/action/stay.action"

export const StayApp = () => {
  const { stays } = useSelector((storeState) => storeState.stayModule)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(loadStays(null))
  },[])

  return (
    <section className="stay-app-container">
      {/* <StayFilter /> */}
      <StayList stays={stays} />
    </section>
  );
};
