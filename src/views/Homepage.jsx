import React from "react";
import { Hero } from './hero.jsx'
import { StayList } from "../cmps/stay-list.jsx";
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadStays } from "../store/action/stay.action.js";
import { PopDestination } from '../cmps/pop-destination.jsx'
import { TopRated } from '../cmps/top-rated.jsx'
export const Homepage = () => {
    // const { stays } = useSelector((storeState) => storeState.stayModule)
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(loadStays(null))
    // }, [])


    return <section className="main-container">
        <Hero />
        < PopDestination />
        < TopRated />

    </section>
}