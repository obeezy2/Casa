import React,{useState,useEffect} from "react";
import {SearchByDate} from './stay-filter-search-dates'
import worldLogo from '../assets/img/filter/world.jpg'

export const StayFilter = () => {

  const [isFilterExpand,setFilterExpand] = useState(false)
  const [currExpand,setExpand] = useState(null)

  //use event on document body to close filter expand 
  useEffect(()=>{
    window.addEventListener('click',()=>{
    })
  },[])

  return <section className="app-filter-container">
    <div className="app-filter">
      <div className='filter-btn-container filter-btn-location' onClick={() =>{
        setFilterExpand(!isFilterExpand)
        setExpand('Anywhere')
      }}>
        <div className="filter-btn" >
          {currExpand === 'Anywhere' && isFilterExpand?
          <div>where <input className="destination-input" onClick={e => e.stopPropagation()} placeholder='search destination'/>
          </div>
          :'Anywhere'}
        </div>
      </div>
      <span className="filter-span"></span>
      <div className='filter-btn-container filter-btn-dates' onClick={() =>{ 
        setFilterExpand(!isFilterExpand)
        setExpand('Any week')
        }}>
        <div className="filter-btn" >
          {currExpand === 'Any week' && isFilterExpand?
          <div>
            <p>When</p>
             <p>Any week</p>
            </div>
          :'Any week'}
        </div>
      </div>
      <span className="filter-span"></span>
      <div className='filter-btn-container filter-btn-guests' onClick={() => {
        setFilterExpand(!isFilterExpand)
        setExpand('Add guests')
        }}>
        <div className="filter-btn" >
          {currExpand === 'Add guests' && isFilterExpand?
          <div>
            <p>Who</p>
             <p>Add guests</p>
            </div>
          :'Add guests'}
        </div>
        <div className="search">
          <div className="search-icon">s</div>
        </div>
      </div>
    </div>
   { isFilterExpand && <div className="filter-expand">
      {currExpand === 'Anywhere' && <div>
        <SearchByDestination />
      </div>}
      {currExpand === 'Any week' &&<div>
        <SearchByDate />
      </div>}
      {currExpand === 'Add guests' &&<div>
        <AddGuests />
      </div>}
    </div>}
  </section>
}


function SearchByDestination(){
  return <div className="destination-search-container">
    <h4 className="destination-search-container-header">search by region</h4>
    <div className="regions-container">
      <div className="region-image-container">
        <img src={worldLogo} alt="err" className="region-image"/>
          <p>I’m flexible</p>
      </div>
      <div className="region-image-container">
          <img src={worldLogo} alt="err"className="region-image" />
          <p>I’m flexible</p>
      </div>
      <div className="region-image-container">
          <img src={worldLogo} alt="err"className="region-image" />
          <p>I’m flexible</p>
      </div>
            <div className="region-image-container">
          <img src={worldLogo} alt="err"className="region-image" />
          <p>I’m flexible</p>
      </div>
            <div className="region-image-container">
          <img src={worldLogo} alt="err"className="region-image" />
          <p>I’m flexible</p>
      </div>
            <div className="region-image-container">
          <img src={worldLogo} alt="err"className="region-image" />
          <p>I’m flexible</p>
      </div>
    </div>
  </div>
}


function AddGuests(){
  return <div>
   <h4>Add guests</h4>
  </div>
}