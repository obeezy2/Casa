import React,{useState,useEffect} from "react";
import {SearchByDate} from './stay-filter-search-dates'
import worldLogo from '../assets/img/filter/world.jpg'

export const StayFilter = () => {

  const [isFilterExpand,setFilterExpand] = useState(false)
  const [currExpand,setExpand] = useState(null)
  const [filterBy,setFilterBy] = useState({})

  const onChangeFilter = (ev) =>{
      ev.preventDefault()
      setFilterBy({...filterBy,txt:ev.target.value})
    }
  //use event on document body to close filter expand 
  useEffect(()=>{
    window.addEventListener('click',()=>{
    })
  },[])
  console.log('filterBy', filterBy)
  return <section className="app-filter-container">
    <div className="app-filter">
      <div className='filter-btn-container filter-btn-location' onClick={() =>{
        setFilterExpand(!isFilterExpand)
        setExpand('Anywhere')
      }}>
        <div className="filter-btn" >
          {currExpand === 'Anywhere' && isFilterExpand?
          <div>
            where
          <form> 
          <input className="destination-input" type="text" 
          onClick={(e) => e.stopPropagation() } 
          onChange={(event) => {onChangeFilter(event)}} 
          placeholder='search destination'/>
          </form> 
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
      <div className='filter-btn-container filter-btn-guests' >
        <div className="filter-btn"  onClick={() => {
        setFilterExpand(!isFilterExpand)
        setExpand('Add guests')
        }}>
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
        <SearchByDestination setRegionFilter={(region) =>setFilterBy({...filterBy,region})} />
      </div>}
      {currExpand === 'Any week' &&<div>
        <SearchByDate onSetDates={(start,end) => setFilterBy({...filterBy, startDate:start, endDate:end})}/>
      </div>}
      {currExpand === 'Add guests' &&<div>
        <AddGuests />
      </div>}
    </div>}
  </section>
}


function SearchByDestination(props){
  const [region,setRegion] = useState({region:''})
  useEffect(() =>{
    props.setRegionFilter(region)
  },[region])
  return <div className="destination-search-container">
    <h4 className="destination-search-container-header">search by region</h4>
    <div className="regions-container">
      <Destination logo={worldLogo} region={'flexible'}  setRegion={ setRegion}/>
      <Destination logo={worldLogo} region={'United States'} setRegion={setRegion} />
      <Destination logo={worldLogo} region={'Middle East'} setRegion={setRegion}/>
      <Destination logo={worldLogo} region={'France'} setRegion={setRegion}/>
      <Destination logo={worldLogo} region={'South America'} setRegion={setRegion}/>
      <Destination logo={worldLogo} region={'Italy'} setRegion={setRegion}/>
    </div>
  </div>
}

function Destination (props){
  return <div className="region-image-container" onClick={() => props.setRegion(props.region)}>
        <img src={props.logo} alt="err" className="region-image"/>
          <p>{props.region}</p>
      </div>
}

function AddGuests(){
  return <div className="add-guest-container">
    <div className="add-guest-box">
      <div className="guests">
       <p>Adults</p>  
        <p>Ages 13 or above</p>
      </div>
      <div className="guests-btns">
        <button>+</button>
        <span>0</span>
        <button>-</button>
      </div>
    </div>
    <div className="add-guest-box">
      <div className="guests">
       <p>Children</p>  
        <p>Ages 2–12</p>
      </div>
      <div className="guests-btns">
        <button>+</button>
        <span>0</span>
        <button>-</button>
      </div>
    </div>
        <div className="add-guest-box">
      <div className="guests">
       <p>Infants</p>  
        <p>Under 2</p>
      </div>
      <div className="guests-btns">
        <button>+</button>
        <span>0</span>
        <button>-</button>
      </div>
    </div>
            <div className="add-guest-box">
      <div className="guests">
       <p>Pets</p>  
        <p>Bringing a service animal?</p>
      </div>
      <div className="guests-btns">
        <button>+</button>
        <span>0</span>
        <button>-</button>
      </div>
    </div>
  </div>
}

