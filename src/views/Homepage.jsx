import React from "react";
import { Hero } from './hero.jsx'
import { StayList } from "../cmps/stay-list.jsx";
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadStays } from "../store/action/stay.action.js";
export const Homepage = () => {
    const { stays } = useSelector((storeState) => storeState.stayModule)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadStays(null))
    }, [])


    return <section>
        <Hero />
        <StayList stays={stays} />
    </section>
}