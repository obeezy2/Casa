import React,{ useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

import { Hero } from './hero.jsx'
import { StayList } from "../cmps/stay-list.jsx";
import { loadStays,setFilterBy } from "../store/action/stay.action.js";
import { PopDestination } from '../cmps/pop-destination.jsx'
import { TopRated } from '../cmps/top-rated.jsx'

export const Homepage = () => {
    const dispatch=useDispatch()
    let navigate = useNavigate()

    function onSetFilter(destination) {
        dispatch(setFilterBy({stayLocation:destination}))
        navigate('/stays')
    }

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return <section className="main-container">
        <Hero />
        < PopDestination onSetFilter={onSetFilter}/>
        < TopRated onSetFilter={onSetFilter}/>

    </section>
}