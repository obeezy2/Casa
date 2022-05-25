import React from "react";

export const StayFilter = () => {

  return <section className="app-filter-container">
    <div className="app-filter">
      <div className='filter-btn-container filter-btn-location'>
        <div className="filter-btn">
          Anywhere
        </div>
      </div>
      <span className="filter-span"></span>
      <div className='filter-btn-container filter-btn-dates'>
        <div className="filter-btn">

          Any week
        </div>
      </div>
      <span className="filter-span"></span>

      <div className='filter-btn-container filter-btn-guests'>
        <div className="filter-btn">

          Add guests
        </div>
        <div className="search">
          <div className="search-icon">s</div>
        </div>
      </div>

    </div>
  </section>
}
