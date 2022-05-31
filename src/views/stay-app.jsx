import { useEffect,useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import React from 'react'
// import { StayFilter } from "../cmps/stay-filter"
import { StayList } from "../cmps/stay-list"
import { loadStays,setFilterBy } from "../store/action/stay.action"
import { FilterIcons } from '../cmps/icon-filters.jsx'
export const StayApp = () => {
  const { stays } = useSelector((storeState) => storeState.stayModule)
  const { filterBy } = useSelector((storeState) => storeState.stayModule)
  const dispatch = useDispatch()
  useEffect(() => {
    console.log('from did mount');
    dispatch(loadStays())
  }, [filterBy])

  const onChangeFilter = useCallback(async (filterBy) => {
    dispatch(setFilterBy(filterBy))
}, [])

  return (
    <section className="stay-app-container explore-layout">
      {/* <StayFilter /> */}
      <FilterIcons onChangeFilter={onChangeFilter}/>
      <StayList stays={stays} />
    </section>
  );
};
