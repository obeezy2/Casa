import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import React from 'react'
// import { StayFilter } from "../cmps/stay-filter"
import { StayList } from "../cmps/stay-list"
import { loadStays } from "../store/action/stay.action"
import { FilterIcons } from '../cmps/icon-filters.jsx'
export const StayApp = () => {
  const { stays } = useSelector((storeState) => storeState.stayModule)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadStays(null))
  }, [])

  return (
    <section className="stay-app-container explore-layout">
      {/* <StayFilter /> */}
      <FilterIcons />
      <StayList stays={stays} />
    </section>
  );
};
