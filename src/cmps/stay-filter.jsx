import React, { useState, useEffect } from "react";
import { SearchByDate } from './stay-filter-search-dates'
import { AddGuestsFilter } from './stay-filter-addGuest-filter'
import worldLogo from '../assets/img/filter/world.jpg'
import { useDispatch } from 'react-redux'
import { setFilterByAction } from '../store/action/stay.action.js'
import { useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';

export const StayFilter = () => {

  const [isFilterExpand, setFilterExpand] = useState(false)
  const [currExpand, setExpand] = useState(null)
  const [filterBy, setFilterBy] = useState({})
  const dispatch = useDispatch()
  let navigate = useNavigate()

  const onChangeFilter = (ev) => {
    ev.preventDefault()
    setFilterBy({ ...filterBy, txt: ev.target.value })
  }

  const onSetFilter = () => {
    dispatch(setFilterByAction(filterBy))
    navigate('/stays')
  }
  //use event on document body to close filter expand 
  // useEffect(()=>{
  //   window.addEventListener('click',()=>{
  //   })
  // },[])

  return <section className="app-filter-container">
    <div className="app-filter">
      <div className='filter-btn-container filter-btn-location' onClick={() => {
        setFilterExpand(!isFilterExpand)
        setExpand('Anywhere')
      }}>
        <div className="filter-btn" >
          {currExpand === 'Anywhere' && isFilterExpand ?
            <div>
              Where
              <form>
                <input className="destination-input" type="text"
                  onClick={(e) => e.stopPropagation()}
                  onChange={(event) => { onChangeFilter(event) }}
                  placeholder='search destination' />
              </form>
            </div>
            : 'Anywhere'}
        </div>
      </div>
      <span className="filter-span"></span>
      <div className='filter-btn-container filter-btn-dates' onClick={() => {
        setFilterExpand(!isFilterExpand)
        setExpand('Any week')
      }}>
        <div className="filter-btn" >
          {currExpand === 'Any week' && isFilterExpand ?
            <div>
              <p>When</p>
              <p>Any week</p>
            </div>
            : 'Any week'}
        </div>
      </div>
      <span className="filter-span"></span>
      <div className='filter-btn-container filter-btn-guests' >
        <div className="filter-btn" onClick={() => {
          setFilterExpand(!isFilterExpand)
          setExpand('Add guests')
        }}>
          {currExpand === 'Add guests' && isFilterExpand ?
            <div>
              <p>Who</p>
              <p>Add guests</p>
            </div>
            : 'Add guests'}
        </div>
        <div className="search">
          <div className="search-icon" onClick={() => onSetFilter()}><SearchIcon fontSize="medium" /></div>
        </div>
      </div>
    </div>
    {isFilterExpand && <div className="filter-expand">
      {currExpand === 'Anywhere' && <div>
        <SearchByDestination setRegionFilter={(region) => setFilterBy({ ...filterBy, region })} />
      </div>}
      {currExpand === 'Any week' && <div>
        <SearchByDate onSetDates={(start, end) => setFilterBy({ ...filterBy, startDate: start, endDate: end })} />
      </div>}
      {currExpand === 'Add guests' && <div>
        <AddGuestsFilter setGuests={(guests) => setFilterBy({ ...filterBy, guestsNumber: guests })} />
      </div>}
    </div>}
  </section>
}


function SearchByDestination(props) {
  const [region, setRegion] = useState('')
  useEffect(() => {
    if (region === '') return
    props.setRegionFilter(region)
  }, [region])
  return <div className="destination-search-container">
    <h4 className="destination-search-container-header">search by region</h4>
    <div className="regions-container">
      <Destination logo={worldLogo} region={'flexible'} setRegion={setRegion} />
      <Destination logo={worldLogo} region={'United States'} setRegion={setRegion} />
      <Destination logo={worldLogo} region={'Middle East'} setRegion={setRegion} />
      <Destination logo={worldLogo} region={'France'} setRegion={setRegion} />
      <Destination logo={worldLogo} region={'South America'} setRegion={setRegion} />
      <Destination logo={worldLogo} region={'Italy'} setRegion={setRegion} />
    </div>
  </div>
}

function Destination(props) {
  return <div className="region-image-container" onClick={() => props.setRegion(props.region)}>
    <img src={props.logo} alt="err" className="region-image" />
    <p>{props.region}</p>
  </div>
}


