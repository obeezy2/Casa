import React from "react";

export const StayFilter = () => {

return<section className="app-filter-container">
    <div className="app-filter">
        <div className='filter-btn filter-btn-location'>
           <h4>Location</h4> 
           <span className="filter-btn-sub-title">Where are you going?</span>
        </div>
        <div className='filter-btn filter-btn-dates'>
          <h4>Dates</h4>  
          <span className="filter-btn-sub-title">Add dates</span>
        </div> 
        <div className='filter-btn filter-btn-guests'>
          <h4 className="guests">Guests</h4>
          <span  >Add guests </span>
        </div> 
        <div className=" search">
              <sapn className="search-icon">s</sapn>
        </div>    
    </div>
</section>
}